$(()=>{
    $('.gnb>li').on('click', function(){
        // 클릭된 걔 -> this
        let tg = $(this); //선택된 놈
        let subH = $('.sub>li').innerHeight();
 

        // 서브메뉴의 높이를 서브메뉴의 갯수마다 길이 다르게 설정
        let subLeng = tg.find('li>a').length;
        let subTh = subH * subLeng;
 

        //모든걸 끄고
        $('.sub').removeClass('on').innerHeight(0);
        //선택된것 하나만 킨다
        tg.find('.sub').addClass('on').innerHeight(subTh);
    });
    
})