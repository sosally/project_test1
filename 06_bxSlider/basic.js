//슬라이드를 감싸는 부모를 제이쿼리 객체로 만든다.
//bxSlider() 함수를 적용한다.
$('.basic_slider').bxSlider({
    mode : 'vertical',
    speed : 500,
    auto: true,
    autoHover: true
});

$('.img_ctl_slider').bxSlider({
    nextSelector : '.img_ctl .next',
    prevSelector : '.img_ctl .prev',
    // multiple

    minSlides:1,
    maxSlides:4,
    moveSlides:2,
    slideWidth:200,
    slideMargin: 30,
    auto : true,
})
//반응형
$('.responsive_slider').bxSlider({
    minSlides:1,
    maxSlides:3,

    slideWidth:800,
    slideMargin: 30,
    auto : true,
});
//비디오
$('.video_slides').bxSlider({
    video: true,
    onSliderLoad : function(currentIndex){
        $('.video_slides li').eq(currentIndex + 1).find('video').get(0).play();
    },
    onSliderAfter: function($slideElement){
        //siblings - 형제요소 선택
        $slideElement.siblings().find('video').get(0).pause();
        $slideElement.find('video').get(0).play();
    }
});

//ticker

$('.ticker_slider').bxSlider({
    mode : 'vertical',
    minSlides: 4,

    maxSlides: 4,
    slideWidth: 170,
    slideMargin: 10,
    ticker: true,
    speed: 19000
  });