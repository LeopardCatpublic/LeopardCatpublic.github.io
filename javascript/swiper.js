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
var gallery_swiper = new Swiper('.gallery_swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop:true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
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