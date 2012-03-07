javascript:(function() {
var thumbs, i;
thumbs = document.querySelectorAll(".uiMediaThumb i");
var html = "";
for (i=0; i < thumbs.length; i++) {
  var thumb = thumbs[i].style.backgroundImage;
  var url = thumb.replace(/^url\("?(.*[^"])"?\)/,"$1");
  var good_url = url.replace(/_a\.jpg/, "_n.jpg");
  html = html + "<img src=\"" + good_url + "\" />";
}
document.body.innerHTML = html;
})();
