(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  var id = new URLSearchParams(location.search).get("id");
  var project = PROJECTS.filter(function (p) { return p.id === id; })[0];
  var container = document.getElementById("workDetail");

  if (!project) {
    container.className = "not-found";
    var msg = document.createElement("p");
    msg.setAttribute("data-i18n-en", "Work not found.");
    msg.setAttribute("data-i18n-ko", "작업을 찾을 수 없습니다.");
    msg.textContent = "Work not found.";
    container.appendChild(msg);
  } else {
    document.title = project.title.en + " — Hansem Kim";

    var title = document.createElement("h1");
    title.className = "detail-title";
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

    var description = document.createElement("p");
    description.className = "detail-description";
    description.setAttribute("data-i18n-en", project.description.en);
    description.setAttribute("data-i18n-ko", project.description.ko);
    description.textContent = project.description.en;

    var gallery = document.createElement("div");
    gallery.className = "detail-gallery";
    project.images.forEach(function (src) {
      var img = document.createElement("img");
      img.src = src;
      img.alt = project.title.en;
      img.loading = "lazy";
      gallery.appendChild(img);
    });

    container.appendChild(title);
    container.appendChild(tagBox);
    container.appendChild(description);
    container.appendChild(gallery);
  }

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
})();
