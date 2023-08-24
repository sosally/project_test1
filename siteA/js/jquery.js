//마우스 호버시 투뎁스 보이게하는..
const depth1 = $('.depth1');
depth1.hover(
    function () {
        $('.depth2').css('display', 'block');
        $('header').addClass('on');
    },
    function () {
        $('.depth2').css('display', 'none');
        $('header').removeClass('on');
    }
);

// slide
// = : 할당연산자

const slides = $('.slide_wrap li')
let n = 0;
function slide() {
    slides.removeClass('on');
    slides.eq(n).addClass('on')
    n++; //변수 +1
    if (n >= slides.length) {
        n = 0;
    }
}
setInterval(() => {
    slide();
}, 2000);
slides.eq(n).addClass('on')

//tab

const tabBtn = $('.board .buttons li');
const panels = $('.panels>div');
tabBtn.on('click', function (e) {
    e.preventDefault();
    let tg = $(this).index();
    panels.hide();
    tabBtn.removeClass('on');
    panels.eq(tg).show();
    tabBtn.eq(tg).addClass('on');
});

//popup
$('.open').on('click',function(e){
    e.preventDefault();
    // $(.popup).css('display','block');
    $('.popup').show();
    $('.overlay').addClass('open');
});
$('.close').on('click',function(e){
    e.preventDefault();
    // $(.popup).css('display','block');
    $('.popup').hide();
    $('.overlay').removeClass('open');
});

        // depth1.addEventListener('mouseover',function(){
        //     depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='block'})
        //     document.querySelector('header').classList.add('on');
        // });
        // // document.querySelector -html 선택
        // // addEventListener -화면에서 일어나는 동작에 대한 일을 시킴
        // //function -할일
        // depth1.addEventListener('mouseout',function(){
        //     depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='none'})
        //     document.querySelector('header').classList.remove('on');
        // });

