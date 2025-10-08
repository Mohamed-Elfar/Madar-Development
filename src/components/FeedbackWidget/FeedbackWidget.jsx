// src/components/FeedbackWidget/FeedbackWidget.jsx
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import MySwal from "../../swalConfig";
import emailjs from "@emailjs/browser";
import { createEmailTemplate } from "../EmailTemplate/emailTemplate";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../../emailjsConfig";

export default function FeedbackWidget() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null); // 'idea' or 'issue'
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    details: "",
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScreenshotPermission, setShowScreenshotPermission] =
    useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        // Reduced limit to 500KB
        MySwal.fire({
          icon: "error",
          title: t("feedback.fileTooLargeTitle"),
          text: t("feedback.fileTooLargeText"),
        });
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleScreenshot = async () => {
    setShowScreenshotPermission(true);
  };

  const allowScreenshot = async () => {
    try {
      // Request screen capture
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
      });

      // Create video element to capture frame
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      video.addEventListener("loadedmetadata", () => {
        // Create canvas to capture screenshot
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);

        // Convert to blob
        canvas.toBlob((blob) => {
          setScreenshot(blob);
          setShowScreenshotPermission(false);
          // Stop the stream
          stream.getTracks().forEach((track) => track.stop());
        }, "image/png");
      });
    } catch (err) {
      console.error("Error capturing screenshot:", err);
      setShowScreenshotPermission(false);
    }
  };

  const cancelScreenshot = () => {
    setShowScreenshotPermission(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    let imageUrl = "";

    try {
      const file =
        uploadedFile ||
        (screenshot
          ? new File([screenshot], "screenshot.png", { type: "image/png" })
          : null);

      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch(
          "https://api.imgbb.com/1/upload?key=ef4ec1a8840a59660ce042ce387686f8",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();

        if (result.success) {
          imageUrl = result.data.url;
        } else {
          throw new Error(result.error.message || "Image upload failed");
        }
      }

      const templateParams = {
        formType: `Feedback: ${selectedType}`,
        ...formData,
        imageUrl,
      };

      const emailBody = createEmailTemplate(templateParams);

      const finalTemplateParams = {
        ...templateParams,
        html_message: emailBody,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        finalTemplateParams,
        EMAILJS_USER_ID
      );

      MySwal.fire({
        icon: "success",
        title: t("feedback.successTitle"),
        text: t("feedback.successMessage"),
      });

      // Reset form on success
      setFormData({
        fullName: "",
        email: "",
        title: "",
        details: "",
      });
      setUploadedFile(null);
      setScreenshot(null);
      setSelectedType(null);
      setIsOpen(false);
    } catch (error) {
      console.error("Submission error:", error);
      MySwal.fire({
        icon: "error",
        title: t("feedback.errorTitle"),
        text: t("feedback.errorMessage"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeScreenshot = () => {
    setScreenshot(null);
  };

  return (
    <>
      {/* Main Feedback Button*/}
      <div className="fixed bottom-0 left-8 z-50 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="feedbackBtn text-white px-4 py-2 rounded-t-lg shadow-lg transition-colors flex items-center gap-2"
          style={{ backgroundColor: "var(--color-primary-900)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-primary-800)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--color-primary-900)")
          }
        >
          <span>💬</span>
          <span className="font-medium">{t("feedback.button")}</span>
        </button>
      </div>

      {/* Feedback Panel */}
      {isOpen && (
        <div className="fixed bottom-16 left-1 z-50">
          <div
            className=" text-white rounded-t-lg shadow-xl w-96 overflow-hidden"
            style={{ backgroundColor: "var(--color-primary-900)" }}
          >
            {!selectedType ? (
              // Type Selection Panel
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{t("feedback.title")}</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedType("idea")}
                    className="w-full p-3 rounded-lg transition-colors flex items-center gap-3"
                    style={{ backgroundColor: "var(--color-primary-700)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-600)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-700)")
                    }
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      💡
                    </div>
                    <div className="text-left">
                      <div className="font-medium">
                        {t("feedback.idea.title")}
                      </div>
                      <div className="text-sm text-gray-300">
                        {t("feedback.idea.description")}
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedType("issue")}
                    className="w-full p-3 rounded-lg transition-colors flex items-center gap-3"
                    style={{ backgroundColor: "var(--color-primary-700)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-600)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-700)")
                    }
                  >
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      🐛
                    </div>
                    <div className="text-left">
                      <div className="font-medium">
                        {t("feedback.issue.title")}
                      </div>
                      <div className="text-sm text-gray-300">
                        {t("feedback.issue.description")}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              // Form Panel
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setSelectedType(null)}
                    className="text-gray-400 hover:text-white fs-2"
                  >
                    {language === "AR" ? "→" : "←"}
                  </button>
                  <h3 className="font-semibold">
                    {selectedType === "idea"
                      ? t("feedback.idea.title")
                      : t("feedback.issue.title")}
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t("feedback.form.fullName")}
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ backgroundColor: "#ffffff", color: "#0b0b0b" }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder={t("feedback.form.email")}
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ backgroundColor: "#ffffff", color: "#0b0b0b" }}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder={t("feedback.form.title")}
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                      style={{ backgroundColor: "#ffffff", color: "#0b0b0b" }}
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder={t("feedback.form.details")}
                      value={formData.details}
                      onChange={(e) =>
                        handleInputChange("details", e.target.value)
                      }
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded resize-none"
                      style={{ backgroundColor: "#ffffff", color: "#0b0b0b" }}
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <button
                        onClick={handleScreenshot}
                        className="flex-1 p-2 rounded transition-colors flex items-center justify-center gap-2"
                        style={{ backgroundColor: "var(--color-primary-700)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--color-primary-600)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--color-primary-700)")
                        }
                      >
                        📷{" "}
                        <span className="text-sm">
                          {t("feedback.form.screenshot")}
                        </span>
                      </button>

                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex-1 p-2 rounded transition-colors flex items-center justify-center gap-2"
                        style={{ backgroundColor: "var(--color-primary-700)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--color-primary-600)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--color-primary-700)")
                        }
                      >
                        📎{" "}
                        <span className="text-sm">
                          {t("feedback.form.upload")}
                        </span>
                      </button>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileUpload}
                      accept="image/*,.pdf,.doc,.docx,.txt"
                      className="hidden"
                    />

                    {/* Display uploaded file */}
                    {uploadedFile && (
                      <div
                        className="flex items-center justify-between p-2 rounded"
                        style={{ backgroundColor: "#ffffff", color: "#0b0b0b" }}
                      >
                        <div className="flex items-center gap-2">
                          <span>📄</span>
                          <span className="text-sm truncate">
                            {uploadedFile.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {(uploadedFile.size / 1024).toFixed(1)} KB
                          </span>
                        </div>
                        <button
                          onClick={removeFile}
                          className="text-red-400 hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    )}

                    {/* Display screenshot */}
                    {screenshot && (
                      <div
                        className="flex items-center justify-between p-2 rounded"
                        style={{ backgroundColor: "#ffffff", color: "#0b0b0b" }}
                      >
                        <div className="flex items-center gap-2">
                          <span>📷</span>
                          <span className="text-sm">
                            {t("feedback.files.screenshot")}
                          </span>
                          <span className="text-xs text-gray-400">
                            {(screenshot.size / 1024).toFixed(1)} KB
                          </span>
                        </div>
                        <button
                          onClick={removeScreenshot}
                          className="text-red-400 hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full p-2 rounded font-medium transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--color-primary-600)",
                      color: "white",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-500)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "var(--color-primary-600)")
                    }
                  >
                    {isSubmitting
                      ? t("feedback.form.submitting")
                      : t("feedback.form.submit")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Screenshot Permission Modal */}
      {showScreenshotPermission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t("feedback.screenshotPermission.title")}
              </h3>
              <p className="text-sm text-gray-600">
                {t("feedback.screenshotPermission.description")}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={cancelScreenshot}
                className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded font-medium transition-colors"
              >
                {t("feedback.screenshotPermission.cancel")}
              </button>
              <button
                onClick={allowScreenshot}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
              >
                {t("feedback.screenshotPermission.allow")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
