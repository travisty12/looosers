var shown = "false";

function openMenu() {
  setTimeout(function() {$("#menuCol").show();
    $("#main").css("left","320px");
    shown="true";},10);
}

function closeMenu() {
  $("#menuCol").hide();
  $("#main").css("left","0px");
  shown = "false";
}

function main() {
  if(shown == "false") {
    openMenu();
  } else if(shown == "true") {
    closeMenu();
  }
}


function search() {
  $("#menuBtn").hide();
  $("#logo").hide();
  $("#submit").hide();
  $("#login").hide();
  $("#closeSearch").css("display","flex");
  $("#search").css("margin-left","200px");
}
function searchClose() {
  $("#menuBtn").show();
  $("#logo").show();
  $("#submit").show();
  $("#login").show();
  $("#closeSearch").hide();
  $("#search").css("margin-left","0px");
}




$(document).ready(function() {
});
