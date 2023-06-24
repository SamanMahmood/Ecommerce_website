//change navebar
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(Window).scrollTop();
    if (scroll > 150) {
      $(".navbar").css("background", "#222");
      $(".navbar").css("box-shadow", "rgba(0,0,0,0.1) 0px 4px 12px");
    } else {
      $(".navbar").css("background", "transparent");
      $(".navbar").css("box-shadow", "none");
    }
  });
});
//smooth scroll

var navbarHeight = $(".navbar").outerHeight();
$(".navbar a").click(function (e) {
  var targetHref = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $(targetHref).offset().top - navbarHeight,
    },
    1000
  );
  e.preventDefault();
});

// nav mobile version
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navebar-menu");

mobile.addEventListener("click", function () {
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
});
mobileLink.addEventListener("click", function () {
  const menuBar = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBar) {
    mobile.classList.toggle("is-active");
    mobileLink.classList.remove("acive");
  }
});
