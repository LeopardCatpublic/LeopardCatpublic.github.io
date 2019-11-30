
$(function() {
  
  $(document).on("mousemove", function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;

// 更改X/Y軸移動速度，數字越小範圍越大

    $(".parallax_layer.plant1").css(
      "-webkit-transform",
      "translate3d(" + mouseX / 35 + "px," + mouseY / 50 + "px, 0)"
    );
    $(".parallax_layer.plant2").css(
      "-webkit-transform",
      "translate3d(" + mouseX / -50 + "px, " + mouseY / 50 + "px, 0)"
    );
    $(".parallax_layer.plant3").css(
      "-webkit-transform",
      "translate3d(" + mouseX / 50 + "px," + mouseY / -100 + "px, 0)"
    );
    $(".parallax_layer.plant4").css(
      "-webkit-transform",
      "translate3d(" + mouseX / -50 + "px," + mouseY / 50 + "px, 0)"
    );

    $(".parallax_layer.plant5").css(
      "-webkit-transform",
      "translate3d(" + mouseX / 0 + "px," + mouseY / 100 + "px, 0)"
    );

    $(".parallax_layer.tree1").css(
      "-webkit-transform",
      "translate3d(" + mouseX / -50 + "px," + mouseY / 50 + "px, 0)"
    );

    $(".parallax_layer.tree2").css(
      "-webkit-transform",
      "translate3d(" + mouseX / 50 + "px," + mouseY / 20 + "px, 0)"
    );

    $(".parallax_layer.tree3").css(
      "-webkit-transform",
      "translate3d(" + mouseX / -50 + "px," + mouseY / 20 + "px, 0)"
    );

// 石虎位置，負數為向上跑
    $(".parallax_layer.cat1").css(
      "-webkit-transform",
      "translate3d(" + mouseX / -30 + "px," + mouseY / -10 + "px, 0)"
    );

    $(".parallax_layer.cat2").css(
      "-webkit-transform",
      "translate3d(" + mouseX / 20 + "px," + mouseY / -15 + "px, 0)"
    );

  });   
  
// 更改背景移動
  var lFollowX = 0,
  lFollowY = 0,
  x = 0,
  y = 0,
  friction = 1 / 10;

function moveBackground() {
x += (lFollowX - x) * friction;
y += (lFollowY - y) * friction;

// 這裡改尺寸
translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.05)';

$('.parallax_camera').css({
  '-webit-transform': translate,
  '-moz-transform': translate,
  'transform': translate
});

window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (7 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (7 * lMouseY) / 100;

});

moveBackground();

});

