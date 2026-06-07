/* ============================================
   TIME FLYS — INTERACTIVE SCRIPT
   Handles slideshow, mobile nav, audio,
   back-to-top button, and small scroll effects.
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupAudio();
  setupBackToTop();
});



function setupMobileNav() {
  const navLinks = document.querySelector(".nav-links");

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function toggleNav() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("open");
}

/* ---------- AUDIO ---------- */

function setupAudio() {
  const audios = document.querySelectorAll("audio");

  audios.forEach((audio) => {
    audio.addEventListener("play", () => {
      audios.forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0;
        }
      });
    });
  });
}

/* ---------- BACK TO TOP ---------- */

function setupBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");

  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("visible", window.scrollY > 300);
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

