import React from "react";
import logoimg from "../../../assets/completeLogo.webp";
export default function SocialFooter() {
  return (
    <div>
      <div className="flex justify-center bg-primary-50">
        <div className=" w-full max-w-7xl pt-3 pb-10 px-4 sm:ps-20  flex flex-wrap gap-6 sm:gap-4 md:gap-16 lg:gap-16 xl:gap-32 items-start md:items-baseline flex-col sm:flex-row content-around justify-between">
          {/* Footer Logo and Icons */}
          <div>
            <img
              loading="lazy"
              src={logoimg}
              className="w-40 h-11"
              alt="footer logo"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {[
              { href: "#", label: "Instagram", icon: "fab fa-instagram" },
              { href: "#", label: "Whatsapp", icon: "fab fa-whatsapp" },
              { href: "#", label: "X", icon: "fab fa-x-twitter" },
              { href: "#", label: "Facebook", icon: "fab fa-facebook-f" },
              { href: "#", label: "LinkedIn", icon: "fab fa-linkedin-in" },
              { href: "#", label: "Youtube", icon: "fab fa-youtube" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="social-btn"
              >
                <i className={`${item.icon} text-lg`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
