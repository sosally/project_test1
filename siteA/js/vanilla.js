        //마우스 호버시 투뎁스 보이게하는..
        const depth1=document.querySelector('.depth1');
        depth1.addEventListener('mouseover',function(){
            depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='block'})
            document.querySelector('header').classList.add('on');
        });
        // document.querySelector -html 선택
        // addEventListener -화면에서 일어나는 동작에 대한 일을 시킴
        //function -할일
        depth1.addEventListener('mouseout',function(){
            depth1.querySelectorAll('.depth2').forEach((o)=>{o.style.display='none'})
            document.querySelector('header').classList.remove('on');
        });

        // slide
        const slides = document.querySelectorAll('.slide_wrap li');
        let n = 0;
        function slide() {
            // .slide_wrap li의 on클래스 삭제
            slides.forEach((slide)=>{slide.classList.remove('on')});
            // 새로운 슬라이드에 'on' 클래스 추가
            slides[n].classList.add('on');
            n++;
            if(n>=slides.length){
                n=0;
            }
        }
        setInterval(() => {
            slide();  
        }, 2000);
        slides[n].classList.add('on');