// зум картинки
function zoomin() {
    var tag = document.getElementById("brs");
    var currWidth = tag.clientWidth;
    tag.style.width = (currWidth + 100) + "px";
}
  
function zoomout() {
    var tag = document.getElementById("brs");
    var currWidth = tag.clientWidth;
    tag.style.width = (currWidth - 100) + "px";
}