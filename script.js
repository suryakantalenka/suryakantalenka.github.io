document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const hero = document.querySelector("[data-hero]");
const menu = document.querySelector("[data-menu]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuClose = document.querySelector("[data-menu-close]");
const menuLabel = document.querySelector("[data-menu-label]");
const backToTop = document.querySelector("[data-back-top]");
let lastFocus = null;

const focusables = (root) => [...root.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];

function setMenu(open) {
  if (!menu || !menuToggle) return;
  lastFocus = open ? document.activeElement : lastFocus;
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
  document.querySelectorAll("main, footer").forEach((node) => node.toggleAttribute("inert", open));
  if (menuLabel) menuLabel.textContent = open ? "Close" : "Menu";
  if (open) menuClose?.focus();
  else if (lastFocus instanceof HTMLElement) lastFocus.focus();
}

menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
menuClose?.addEventListener("click", () => setMenu(false));
menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

function updateChrome() {
  const heroBottom = hero ? hero.offsetTop + hero.offsetHeight - 110 : 520;
  const overHero = window.scrollY < heroBottom;
  header?.classList.toggle("over-hero", overHero);
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
  backToTop?.classList.toggle("is-visible", window.scrollY > 700);
}

updateChrome();
window.addEventListener("scroll", updateChrome, { passive: true });
window.addEventListener("resize", updateChrome);

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -20px" });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const achievementCards = [...document.querySelectorAll("[data-achievement]")];
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const year = button.dataset.filter;
    filterButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });
    achievementCards.forEach((card) => {
      const show = year === "all" || (card.dataset.years || "").split(" ").includes(year);
      card.hidden = !show;
      if (!show) card.open = false;
    });
  });
});

const gallery = document.querySelector("[data-gallery]");
const galleryTrack = document.querySelector("[data-gallery-track]");
const galleryItems = [...document.querySelectorAll("[data-gallery-item]")];
const galleryCount = document.querySelector("[data-gallery-count]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCount = document.querySelector("[data-lightbox-count]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrev = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
let galleryIndex = 0;
let touchStartX = 0;
let lightboxReturnFocus = null;

const paddedCount = (index) => `${String(index + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}`;

function moveGallery(nextIndex) {
  if (!galleryItems.length || !galleryTrack) return;
  galleryIndex = (nextIndex + galleryItems.length) % galleryItems.length;
  const target = galleryItems[galleryIndex];
  galleryTrack.style.transform = `translateX(${-target.offsetLeft}px)`;
  galleryItems.forEach((item, index) => item.classList.toggle("is-active", index === galleryIndex));
  if (galleryCount) galleryCount.textContent = paddedCount(galleryIndex);
}

function updateLightbox() {
  if (!lightboxImage || !galleryItems.length) return;
  lightboxImage.src = galleryItems[galleryIndex].dataset.src || "";
  if (lightboxCount) lightboxCount.textContent = paddedCount(galleryIndex);
}

function openLightbox(index) {
  if (!lightbox) return;
  lightboxReturnFocus = document.activeElement;
  galleryIndex = index;
  updateLightbox();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  document.querySelectorAll("header, main, footer, [data-back-top]").forEach((node) => node.setAttribute("inert", ""));
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  document.querySelectorAll("header, main, footer, [data-back-top]").forEach((node) => node.removeAttribute("inert"));
  if (lightboxReturnFocus instanceof HTMLElement) lightboxReturnFocus.focus();
}

galleryPrev?.addEventListener("click", () => moveGallery(galleryIndex - 1));
galleryNext?.addEventListener("click", () => moveGallery(galleryIndex + 1));
galleryItems.forEach((item, index) => item.addEventListener("click", () => openLightbox(index)));
lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => { moveGallery(galleryIndex - 1); updateLightbox(); });
lightboxNext?.addEventListener("click", () => { moveGallery(galleryIndex + 1); updateLightbox(); });
lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
gallery?.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
gallery?.addEventListener("touchend", (event) => {
  const difference = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(difference) > 45) moveGallery(galleryIndex + (difference < 0 ? 1 : -1));
}, { passive: true });

window.addEventListener("resize", () => moveGallery(galleryIndex));
moveGallery(0);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (lightbox?.classList.contains("is-open")) closeLightbox();
    else setMenu(false);
  }
  if (lightbox?.classList.contains("is-open")) {
    if (event.key === "ArrowLeft") { moveGallery(galleryIndex - 1); updateLightbox(); }
    if (event.key === "ArrowRight") { moveGallery(galleryIndex + 1); updateLightbox(); }
    if (event.key === "Tab") {
      const items = focusables(lightbox);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  } else if (menu?.classList.contains("is-open") && event.key === "Tab") {
    const items = focusables(menu);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  } else if (document.activeElement === gallery) {
    if (event.key === "ArrowLeft") moveGallery(galleryIndex - 1);
    if (event.key === "ArrowRight") moveGallery(galleryIndex + 1);
  }
});
