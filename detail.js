(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  var id = new URLSearchParams(location.search).get("id");
  var project = PROJECTS.filter(function (p) { return p.id === id; })[0];
  var container = document.getElementById("workDetail");

  if (!project) {
    container.className = "not-found";
    var msg = document.createElement("p");
    msg.textContent = "작업을 찾을 수 없습니다.";
    container.appendChild(msg);
    return;
  }

  document.title = project.title + " — Hansem Kim";

  var title = document.createElement("h1");
  title.className = "detail-title";
  title.textContent = project.title;

  var description = document.createElement("p");
  description.className = "detail-description";
  description.textContent = project.description;

  var gallery = document.createElement("div");
  gallery.className = "detail-gallery";
  project.images.forEach(function (filename) {
    var img = document.createElement("img");
    img.src = "assets/works/" + project.id + "/" + filename;
    img.alt = project.title;
    img.loading = "lazy";
    gallery.appendChild(img);
  });

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(gallery);
})();
