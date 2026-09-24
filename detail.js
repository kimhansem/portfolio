(function () {
  "use strict";

  var VIDEO_EXTENSIONS = ["mp4", "webm"];

  function isVideoFile(filename) {
    var ext = filename.split(".").pop().toLowerCase();
    return VIDEO_EXTENSIONS.indexOf(ext) !== -1;
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  var id = new URLSearchParams(location.search).get("id");
  var project = PROJECTS.filter(function (p) { return p.id === id; })[0];
  var info = document.getElementById("workInfo");
  var gallery = document.getElementById("workGallery");

  if (!project) {
    var msg = document.createElement("p");
    msg.textContent = "작업을 찾을 수 없습니다.";
    info.appendChild(msg);
    return;
  }

  document.title = project.title + " — Hansem Kim";

  var title = document.createElement("h1");
  title.className = "detail-title";
  title.textContent = project.title;

  var date = document.createElement("p");
  date.className = "detail-date";
  date.textContent = project.date;

  var tags = document.createElement("p");
  tags.className = "detail-tags";
  tags.textContent = project.tags.map(function (t) { return "#" + t; }).join(" ");

  var description = document.createElement("p");
  description.className = "detail-description";
  description.textContent = project.description;

  project.images.forEach(function (filename) {
    var src = "assets/works/" + project.id + "/" + filename;
    var media;

    if (isVideoFile(filename)) {
      media = document.createElement("video");
      media.src = src;
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
    } else {
      media = document.createElement("img");
      media.src = src;
      media.alt = project.title;
      media.loading = "lazy";
    }

    gallery.appendChild(media);
  });

  info.appendChild(title);
  info.appendChild(date);
  info.appendChild(tags);
  info.appendChild(description);
})();
