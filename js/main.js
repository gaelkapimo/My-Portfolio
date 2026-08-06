/* =====================================================
   GAEL KAPIMO PORTFOLIO
   Main JavaScript
===================================================== */

/* =========================
   CURRENT YEAR FOOTER
========================= */

const year = document.querySelector(".footer-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =========================
   NAVBAR EFFECT ON SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
  ".section, .project-card, .stack-category, .certificate-card",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("hidden");

  revealObserver.observe(element);
});

/* =========================
   SMOOTH MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

/* =========================
   IMAGE FALLBACK
========================= */

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("error", () => {
    img.style.display = "none";
  });
});

/* =========================
   YEAR AUTOMATIC
========================= */

document.querySelectorAll(".current-year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
