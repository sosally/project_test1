const smallpic = $('.pic');
const lightbox = $('#lightbox');
const lightImg = $('#lightboxImg');

smallpic.on('click', function(){
    // 가져와 attr('속성')
    // 바꿔 attr('속성', '바꿀속성')
    const big = $(this).attr('data-src');
    console.log(big)
    lightImg.attr('src', big);
    lightbox.css('display','block');
    $('html').addClass('on'); //투뎁스, 네비 색상 변경에도
})
lightbox.on('click', function(){
    lightbox.css('display','none');
    $('html').removeClass('on');
})