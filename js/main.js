var scroll = new SmoothScroll('a[href*="#"]');

$(window).scroll(function () {
  let x = $(window).scrollTop();
  console.log(x);
  if (x >= 575) {
    $("#div2").css("background", "black");
    console.log("vfdbgfd");
  }

  $(function () {
    $("html").niceScroll();
  });
});
$("document").ready(function () {});
