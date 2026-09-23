(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Category filter
  var filterButtons = document.querySelectorAll(".filter-btn");
  var items = document.querySelectorAll(".item");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var filter = btn.getAttribute("data-filter");
      items.forEach(function (item) {
        var tags = item.getAttribute("data-tags") || "";
        var show = filter === "all" || tags.indexOf(filter) !== -1;
        item.classList.toggle("is-hidden", !show);
      });
    });
  });

  // Language toggle (EN <-> KO)
  var isKorean = false;
  var langToggle = document.getElementById("langToggle");
  var i18nElements = document.querySelectorAll("[data-i18n-en]");

  function applyLanguage() {
    i18nElements.forEach(function (el) {
      var text = isKorean ? el.getAttribute("data-i18n-ko") : el.getAttribute("data-i18n-en");
      if (text !== null) {
        el.textContent = text;
      }
    });
    langToggle.textContent = isKorean ? "ENG" : "KOR";
    document.documentElement.lang = isKorean ? "ko" : "en";
  }

  langToggle.addEventListener("click", function () {
    isKorean = !isKorean;
    applyLanguage();
  });

  // Lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(trigger) {
    var caption = isKorean
      ? trigger.getAttribute("data-caption-ko")
      : trigger.getAttribute("data-caption-en");

    lightboxImg.src = trigger.getAttribute("data-full");
    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
  }

  document.querySelectorAll(".item-media").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openLightbox(btn);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
})();
