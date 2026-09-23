(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // Build the filter nav and work grid from projects.js
  var usedCategories = CATEGORIES.filter(function (cat) {
    return PROJECTS.some(function (p) { return p.tags.indexOf(cat.id) !== -1; });
  });

  var filterNav = document.getElementById("filterNav");
  var allBtn = document.createElement("button");
  allBtn.className = "filter-btn active";
  allBtn.setAttribute("data-filter", "all");
  allBtn.setAttribute("data-i18n-en", "All");
  allBtn.setAttribute("data-i18n-ko", "전체");
  allBtn.textContent = "All";
  filterNav.appendChild(allBtn);

  usedCategories.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.setAttribute("data-filter", cat.id);
    btn.setAttribute("data-i18n-en", cat.en);
    btn.setAttribute("data-i18n-ko", cat.ko);
    btn.textContent = cat.en;
    filterNav.appendChild(btn);
  });

  var workGrid = document.getElementById("workGrid");
  PROJECTS.forEach(function (project) {
    var article = document.createElement("article");
    article.className = "item";
    article.setAttribute("data-tags", project.tags.join(" "));

    var media = document.createElement("button");
    media.className = "item-media";
    media.setAttribute("data-full", project.image);
    media.setAttribute("data-caption-en", project.title.en);
    media.setAttribute("data-caption-ko", project.title.ko);

    var img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title.en;
    img.loading = "lazy";
    media.appendChild(img);

    var title = document.createElement("p");
    title.className = "item-title";
    title.setAttribute("data-i18n-en", project.title.en);
    title.setAttribute("data-i18n-ko", project.title.ko);
    title.textContent = project.title.en;

    var tagBox = document.createElement("div");
    tagBox.className = "tag-box";
    project.tags.forEach(function (tag) {
      var span = document.createElement("span");
      span.className = "tag";
      span.textContent = "#" + tag;
      tagBox.appendChild(span);
    });

    article.appendChild(media);
    article.appendChild(title);
    article.appendChild(tagBox);
    workGrid.appendChild(article);
  });

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
