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
  var lightboxVideo = document.getElementById("lightboxVideo");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(trigger) {
    var full = trigger.getAttribute("data-full");
    var isVideo = trigger.getAttribute("data-video") === "true";
    var caption = isKorean
      ? trigger.getAttribute("data-caption-ko")
      : trigger.getAttribute("data-caption-en");

    if (isVideo) {
      lightboxVideo.src = full;
      lightboxVideo.hidden = false;
      lightboxImg.hidden = true;
      lightboxVideo.play();
    } else {
      lightboxImg.src = full;
      lightboxImg.hidden = false;
      lightboxVideo.hidden = true;
    }

    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
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

  // Autoplay grid videos muted, pause when out of view
  var gridVideos = document.querySelectorAll(".item-media video");
  if ("IntersectionObserver" in window && gridVideos.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.25 });

    gridVideos.forEach(function (video) {
      observer.observe(video);
    });
  }
})();
