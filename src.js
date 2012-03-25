javascript:(function() {
var thumbs, i;
links = document.querySelectorAll(".archiveLink");
for (i=0; i < links.length; i++) {
  links[i].setAttribute("ajaxify", links[i].attributes.ajaxify.value.replace(/action=tag/, "action=delete"));
  links[i].setAttribute("title", "Delete");
}
})();
