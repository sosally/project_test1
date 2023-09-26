DOMContentLoaded, () => {
    //페이지로드 및 리로드(새로고침)
    // 비디오, 비디오부모, 윈도우(가로세로크기)

    const win = document.querySelector(window); //객체라 따옴표 안함
    let winH = win.innerHeight();
    let winW = win.innerWidth();


    const vid = document.querySelector('#mainVideo');
    let vidH = vid.innerHeight();
    let vidW = vid.innerWidth();

    const vidWrap = vid.parent('.main-video');
    videoResizeFn();
    //리사이즈시 실행할 함수
    document.querySelector(window).resize(function(){
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
        vidW.style.width = '100%';
        vidW.style.height = winH;
        // 창크기와 미디어크기 맞추기

        if(winH > vidH){
            // 비디오가 윈도우보다 높이 작아도 아래로 꽉차게

            vid.style.width = 'auto';
            vid.style.height = winH;
    
            // 비디오 정렬 : 부모 relative 주기
            vid.sytle.left = '50%';
            vid.sytle.top = '50%';
            vid.sytle.transform = 'translate(-50%, -50%)';
        }
        if(winW > vidW){
            vid.style.width = winW;
            vid.style.height = 'auto';
    
            // 비디오 정렬 : 부모 relative 주기
            vid.sytle.left = '50%';
            vid.sytle.top = '50%';
            vid.sytle.transform = 'translate(-50%, -50%)';
        }
    }

}