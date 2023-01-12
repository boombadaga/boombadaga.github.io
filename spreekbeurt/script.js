function changeContent(html) {
  document.getElementById("button").innerHTML = html;
  setTimeout(revertContent, 3*1000)
}
function revertContent(revertText) {
  document.getElementById("button").innerHTML = "<h1>Klik op mij!</h1>";
}