(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  var workGrid = document.getElementById("workGrid");

  PROJECTS.forEach(function (project) {
    var article = document.createElement("article");
    article.className = "item";

    var media = document.createElement("a");
    media.className = "item-media";
    media.href = "work.html?id=" + encodeURIComponent(project.id);

    var img = document.createElement("img");
    img.src = "assets/works/" + project.id + "/" + project.thumbnail;
    img.alt = project.title;
    img.loading = "lazy";
    media.appendChild(img);

    var title = document.createElement("p");
    title.className = "item-title";
    title.textContent = project.title;

    var tags = document.createElement("p");
    tags.className = "item-tags";
    tags.textContent = project.tags.map(function (t) { return "#" + t; }).join(" ");

    article.appendChild(media);
    article.appendChild(title);
    article.appendChild(tags);
    workGrid.appendChild(article);
  });
})();
