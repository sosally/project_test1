document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('p').style.color = 'green';
    document.querySelector('.blue').style.color = 'blue';
})



document.addEventListener('DOMContentLoaded',()=>{
    
    
    const list1 = document.querySelectorAll('#list1 li')
    
    //💚forEach 다같이 클래스 붙이고 조정
    list1.forEach((el, idx) => {
        el.textContent += `🍔${idx +1}textContent로 추가`
        el.classList.add(`a${idx +1}`)
        el.style.marginLeft = `${idx *10}px`
    })
    //el : list1의 값 하나씩 소환
//idx : 멤버의 번호
//3 
//3개 다, 써도 되고 안써도 되고
    
    //랜덤 조작
    let list2 = document.querySelector('.theObj');
    list2.innerHTML = `<span>${Math.random()}</span>`;
    list2.setAttribute('data-set', 'accessbillity');
    console.log(list2.getAttribute('class'));//the

    //class 붙이기
    let list0 = document.querySelector('#list2');

    // list0.classList.add(list2.getAttribute('class'))
    list0.setAttribute('class', list2.getAttribute('class'))


    const list3 = document.querySelector('#list3');
    const li = '<li>추가한애</li>'
    list3.innerHTML += `<li>list6-innerHTML로 넣은</li>`


    //위치 특정해서 조작
    list3.insertAdjacentHTML('afterbegin',`afterbegin으로${li}`)
    list3.insertAdjacentHTML('beforeend',`beforeend으로${li}`)
    const list3Lis = document.querySelectorAll('#list3 li');
    list3Lis[4].insertAdjacentHTML('beforebegin', `${li}`)
    list3Lis[4].insertAdjacentHTML('afterend', `${li}`)
});



