const depth1 = document.querySelectorAll('.gnb>li');
//애들이 여러개니, 바로 on 클릭 불가.. 반복문 돌려야함
const sub = document.querySelectorAll('.sub');
depth1.forEach((el, idx)=>{
    el.addEventListener('click', function(){
        //el들이 클릭 될때마다 할일
        let tg = this;
        let subH = document.querySelector('.sub>li').clientHeight;
        let subLeng = tg.children[1].childElementCount;
       
        let subTh = subH * subLeng;
        
        subOff();

         tg.querySelector('.sub').classList.add('on');
         tg.querySelector('.sub').style.height = subTh + 'px';
    });
});

//이름을 붙인 이유 : 코드블럭{} 오가며 쓸 수 있게
function subOff(){
    sub.forEach((el)=>{
        el.classList.remove('on');
        el.style.height = 0;
    })
}



// $('.gnb>li').on('click', function(){
//         // 클릭된 걔 -> this
//         let tg = $(this); //선택된 놈
//         let subH = $('.sub>li').innerHeight();
 

//         // 서브메뉴의 높이를 서브메뉴의 갯수마다 길이 다르게 설정
//         let subLeng = tg.find('li>a').length;
//         let subTh = subH * subLeng;
 

//         //모든걸 끄고
//         $('.sub').removeClass('on').innerHeight(0);
//         //선택된것 하나만 킨다
//         tg.find('.sub').addClass('on').innerHeight(subTh);
//     });
    
