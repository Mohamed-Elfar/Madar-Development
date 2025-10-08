export const createEmailTemplate = (formData) => {
  const { formType, ...data } = formData;

  const renderFields = () => {
    return Object.entries(data)
      .map(([key, value]) => {
        if (!value || key === "imageUrl") return ""; // Exclude imageUrl from this table
        const fieldName =
          key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
        return `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dddddd; font-size: 14px; color: #555555; width: 30%; vertical-align: top;">
              <strong>${fieldName}:</strong>
            </td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dddddd; font-size: 14px; color: #333333;">
              ${value}
            </td>
          </tr>
        `;
      })
      .join("");
  };

  const renderAttachmentLink = () => {
    if (data.imageUrl) {
      return `
        <tr>
          <td colspan="2" style="padding-top: 20px;">
            <h2 style="font-size: 18px; color: #333333; margin-bottom: 10px;">Attachment Link</h2>
            <a href="${data.imageUrl}" target="_blank" style="color: #4A8B8B; text-decoration: none; font-size: 14px;">View Attached Image</a>
          </td>
        </tr>
      `;
    }
    return "";
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Form Submission</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap');
        body {
          font-family: 'Cairo', Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #dddddd;
        }
        .header {
          background-color: #4A8B8B;
          padding: 20px;
          text-align: center;
        }
        .header img {
          max-width: 150px;
        }
        .content {
          padding: 30px;
        }
        .content h1 {
          font-size: 22px;
          color: #333333;
          margin-bottom: 20px;
          text-align: center;
        }
        .footer {
          background-color: #f4f4f4;
          color: #888888;
          text-align: center;
          padding: 20px;
          font-size: 12px;
        }
        .footer a {
          color: #4A8B8B;
          text-decoration: none;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://your-live-website.com/images/spinnerLogo.png" alt="ConsulRain Logo">
        </div>
        <div class="content">
          <h1>New ${formType || "Form"} Submission</h1>
          <table role="presentation">
            <tbody>
              ${renderFields()}
              ${renderAttachmentLink()}
            </tbody>
          </table>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} ConsulRain. All Rights Reserved.</p>
          <p><a href="https://consulrain.com">Visit our website</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};
