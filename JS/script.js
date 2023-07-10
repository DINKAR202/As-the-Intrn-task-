// card slider

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

function second_hero() {
  document.getElementById("first-slid").style.width = "0%";
  document.getElementById("second-slid").style.width = "100%";
  // Document.getElementById("first-slid").style.transition = "0.5s";
}

function first_hero() {
  document.getElementById("first-slid").style.width = "100%";
  document.getElementById("second-slid").style.width = "0%";
}
