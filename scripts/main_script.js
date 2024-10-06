document.getElementsByTagName("body")[0].onload = function () {
  loadHeader();
}

let loadHeader = function () {
  const style_link = document.createElement('link');
  style_link.setAttribute("href", "/styles/header.css");
  style_link.setAttribute("rel", "stylesheet");
  document.getElementsByTagName("head")[0].appendChild(style_link);
  $("#header_style").load("/pages/templates/header.html");
}
