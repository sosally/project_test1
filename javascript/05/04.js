const large = document.querySelector('#large');
const small = document.querySelectorAll('.small');

small.forEach((el)=>{
    el.addEventListener('click', function(){
        let change = this.src;
        large.setAttribute('src', change)
    })
})

const detail = document.querySelector('#detail');
const view = document.querySelector('#view');

view.addEventListener('click', ()=>{
    detail.style.display = 'block'})



// function displaySrc(){
    
//     alert('이미지 주소' + large.getAttribute('src'));
// }