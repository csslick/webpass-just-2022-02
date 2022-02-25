// 2단계 메뉴 hover
$(function(){

  $('nav .depth1 > li').hover(
    function(){
      // $(this).find('.depth2') - 이게 더 편함
      $(this).children().addClass('on');
    },
    function(){
      // 마우스 가나면 on class 제거
      $(this).children().removeClass('on');
    }
  );

  // 이미지 슬라이더
  var num = 0;        // 이미지 번호
  var height = -300;   // 이미지 높이값

  setInterval(function(){
    num++;
    if(num > 2) num = 0;
    $('.sliders').css('top', num * height);  
  }, 3000);

})