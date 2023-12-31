$(() => {
    //페이지로드 및 리로드(새로고침)
    // 비디오, 비디오부모, 윈도우(가로세로크기)

    const win = $(window); //객체라 따옴표 안함
    let winH = win.innerHeight();
    let winW = win.innerWidth();


    const vid = $('#mainVideo');
    let vidH = vid.innerHeight();
    let vidW = vid.innerWidth();

    const vidWrap = vid.parent('.main-video');
    videoResizeFn();
    //리사이즈시 실행할 함수
    $(window).resize(function(){
        console.log('💛');
        videoResizeFn();
    })

    // 가변미디어 함수

    function videoResizeFn() {
        winH = win.innerHeight(); //리사이징시의 크기 재할당
        winW = win.innerWidth();
        vidH = vid.innerHeight();
        vidW = vid.innerWidth();
        //변경되는 사이즈 출력
        console.log(winH, winW); 
        console.log(vidH, vidW);
        vidWrap.css({
            width: '100%',
            height: winH
        })
        // 창크기와 미디어크기 맞추기



        if(winH > vidH){
            // 비디오가 윈도우보다 높이 작아도 아래로 꽉차게
            vid.css({
                width : 'auto',
                height : winH
            })
            // 비디오 정렬 : 부모 relative 주기
            vid.css({
                left : '50%',
                top : '50%',
                transform : 'translate(-50%, -50%)'
            })
        }

        if(winW > vidW){
            // 비디오가 윈도우보다 높이 작아도 아래로 꽉차게
            vid.css({
                width : winW,
                height : auto
            })
            // 비디오 정렬 : 부모 relative 주기
            vid.css({
                left : '50%',
                top : '50%',
                transform : 'translate(-50%, -50%)'
            })
        }
    }

})