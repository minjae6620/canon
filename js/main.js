$(document).ready(function () {

  // 제품종류 슬라이더
  // btn_next
  var num = 0;
  $("div.product>.btn_next").click(function () {
    num++;
    $("div.product>.btn_prev").removeClass("on")
    if (num >= 6) {
      num = 6;
      $("div.product>.btn_next").addClass("on")
    }else if (num < 6) {
      $("div.product>.btn_next").removeClass("on")
    };
    $("div.product>ul").css("transform","translateX(-"+(8.444*num)+"%)");
  });

  // btn_prev
  $("div.product>.btn_prev").click(function () {
    num--;
    $("div.product>.btn_next").removeClass("on")
    if (num <= 0) {
      num = 0;
      $("div.product>.btn_prev").addClass("on")
    }else if (num < 6) {
      $("div.product>.btn_prev").removeClass("on")
    };
    $("div.product>ul").css("transform","translateX(-"+(8.444*num)+"%)");
  });

  // what's hot
  // btn_next
  var hnum = 0;
  $("div.hot>.btn_next").click(function () {
    hnum++;
    $("div.hot>.btn_prev").removeClass("on")
    if (hnum >= 3) {
      hnum = 3;
      $("div.hot>.btn_next").addClass("on")
    }else if (num < 3) {
      $("div.hot>.btn_next").removeClass("on")
    };
    slideMove(hnum);
  });

  // btn_prev
  $("div.hot>.btn_prev").click(function () {
    hnum--;
    $("div.hot>.btn_next").removeClass("on")
    if (hnum <= 0) {
      num = 0;
      $("div.hot>.btn_prev").addClass("on")
    }else if (hnum < 3) {
      $("div.hot>.btn_prev").removeClass("on")
    };
    slideMove(hnum);
  });
  // 슬라이드
  function slideMove(slideIndex) {
    $("div.hot>ul").css("transform","translateX(-"+(25*hnum)+"%)");
    $(".pagenation>.pageList>li").removeClass("on");
    $(".pagenation>.pageList>li").eq(slideIndex).addClass("on");
  }
  // 슬라이드 버튼
  $(".pagenation>.pageList>li").click(function() {
    $(".pagenation>.pageList>li").removeClass("on");
    $(this).addClass("on");
    var liDex = $(this).index();
    hnum = liDex;
    slideMove(liDex);
  });

  // 공지사항 슬라이드
  var ins = 0;
  $("footer>.ft1 .btn>.down").click(function() {
    ins++
    if (ins > 2) {
      ins = 0;
      $("footer>.ft1 ul").css("transition","none")
    };
    $("footer>.ft1 ul").css("transform","translateY(-"+(135*ins)+"%)");
  });

  $("footer>.ft1 .btn>.up").click(function() {
    ins--
    if (ins < 0) {
      ins = 2;
    };
    $("footer>.ft1 ul").css("transform","translateY(-"+(135*ins)+"%)");
  });

  var timer = setInterval(function() {
    ins++
    if (ins > 2) {
      ins = 0
    };
    $("footer>.ft1 ul").css("transform","translateY(-"+(135*ins)+"%)");
  },2000);

  $("footer>.ft1 .btn>.stop").click(function() {
    $(this).addClass("on");
    $("footer>.ft1 .btn>.play").removeClass("on")
    clearInterval(timer)
  });
  $("footer>.ft1 .btn>.play").click(function() {
    $(this).addClass("on");
    $("footer>.ft1 .btn>.stop").removeClass("on")
    timer = setInterval(function() {
      ins++
      if (ins > 2) {
        ins = 0
      };
      $("footer>.ft1 ul").css("transform","translateY(-"+(135*ins)+"%)");
    },2000);
  });


});









































// ls
