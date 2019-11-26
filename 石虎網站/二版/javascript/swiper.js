// var swiper_intro = new Swiper('#intro_swiper', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     hide: true,
//   },
// });


var swiper_news = new Swiper('#news_swiper', {
  slidesPerView:3,
  spaceBetween: 30,
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
// var o={};
// Object.defineProperty(o, '#news_swiper', {
//   slidesPerView:3,
//   writable: true,
//   configurable: true,
//   enumerable: true
// });
console.log(swiper_news);
// Object.defineProperty(o, '#news_swiper', { slidesPerView:3 });
// var slidesPerViewb=1;
// Object.defineProperty(swiper_news,'#news_swiper', {
//   get: function() { return slidesPerViewb; },
//   set: function(newValue) { slidesPerViewb = newValue; },
//   enumerable: true,
//   configurable: true
// });
// console.log(swiper_news.slidesPerViewb)
// // console.log(swiper_news.passedParams.slidesPerView)
//   var window_width=0;

// console.log(swiper_news.passedParams.slidesPerView);
//   if (window.innerWidth)
//     window_width = window.innerWidth;
//     // console.log(window_width);
//   if (window_width<=1200) {
//     // swiper_news={slidesPerView:1}
//     function(swiper_news){
//       swiper_news.passedParams.slidesPerView=1;
//       console.log(swiper_news.passedParams.slidesPerView);
//     }
//   }
//無法覆蓋掉前面的preview:3

var swiper_protect = new Swiper('.protect_swiper', {
  //不能用id查找 事件裡的swiper-container太多 用另一個class抓取
  effect: 'flip',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});