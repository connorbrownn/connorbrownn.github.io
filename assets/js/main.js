import { siteConfig } from "./data.js";

const currentPage = (() => {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
})();

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === `./${currentPage}` || (currentPage === "index.html" && href === "./index.html")) {
    link.setAttribute("aria-current", "page");
  }
});

const yearEl = document.querySelector("[data-year]");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const statusLocation = document.querySelector("[data-status-location]");
const statusFocus = document.querySelector("[data-status-focus]");
if (statusLocation) {
  statusLocation.textContent = siteConfig.status.location;
}
if (statusFocus) {
  statusFocus.textContent = siteConfig.status.focus;
}

const photoEl = document.querySelector("[data-profile-photo]");
if (photoEl) {
  photoEl.src = siteConfig.photoUrl;
  photoEl.alt = `${siteConfig.name} profile photo`;
}

const socialLinks = document.querySelectorAll("[data-social]");
socialLinks.forEach((link) => {
  const key = link.getAttribute("data-social");
  const value = siteConfig.social[key];
  if (value) {
    link.setAttribute("href", key === "email" ? `mailto:${value}` : value);
    link.textContent = key === "email" ? value : link.textContent;
  }
});

const copyButton = document.querySelector("[data-copy-email]");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.social.email);
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = "Copy email";
      }, 1500);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      setTimeout(() => {
        copyButton.textContent = "Copy email";
      }, 1500);
    }
  });
}
