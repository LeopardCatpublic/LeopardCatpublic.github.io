var swiper_news = new Swiper('#news_swiper', {
  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  writable: true,
  enumerable: true,
  configurable: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



var swiper_protect = new Swiper('.protect_swiper', {
  //不能用id查找 事件裡的swiper-container太多 用另一個class抓取
  effect: 'flip',
  grabCursor: true,

});

var swiper = new Swiper('.danger_swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
$(document).ready(function () {
  $(window).resize(function () {
    var ww = $(window).width()
    if (ww > 1200) {
      swiper_news.params.slidesPerView = 3;
    }
    if (ww < 1200) {
      swiper_news.params.slidesPerView = 1;
    }

    // swiper_news.reInit()
  });
  // $(window).trigger('resize')
});

// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 10,
//   loop: true,
//   loopedSlides: 5, //looped slides should be the same
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   },
// });
