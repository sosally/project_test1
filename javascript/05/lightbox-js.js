// dom에서 조작해야하는 요소를 변수에 저장하기

// 작은 이미지
const smallpic = document.querySelectorAll('.pic');

// 큰 이미지
const lightbox = document.querySelector('#lightbox');

const lightImg = document.querySelector('#lightboxImg')

for(let i = 0; i<smallpic.length; i++){
    smallpic[i].addEventListener('click', showLightbox)
}

function showLightbox(){
    const big = this.getAttribute('data-src');
    console.log(big);
    lightImg.setAttribute('src',big);
    lightbox.style.display = 'block';
    document.querySelector('html').classList.add('on');
}
lightbox.onclick = function(){
    lightbox.style.display = 'none';
    document.querySelector('html').classList.remove('on');
}