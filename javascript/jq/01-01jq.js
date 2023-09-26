// $(function(){})
$(()=>{
    $('p').css('color','green');
    $('.blue').css('color','blue');

    
    const list1 = $('#list1 li');
    //제이쿼리 반복문 : 요소들이 군데군데 떨어졌을 때(부모가 서로 다른애들 반복돌릴때)
    list1.each((idx, el)=>{
        let oriText = $(el).text();
        const newText = oriText + idx + 'text()로 추가된것';
        $(el).text(newText);
        $(el).addClass(`a${idx}`);
        $(el).css('margin-left',`${idx *10}px`);
    })
  
    //랜덤 조작
    let list2 = $('.theObj');
    list2.html(`<span>🤎${Math.random()}</span>`);


    list2.attr('data-set', '🤎accessbillity');//the

    
    //class 붙이기
    $('#list2').attr('class', list2.attr('class'));

    // list0.classList.add(list2.getAttribute('class'))


    //js 대체불가~
    const li = '<li>추가한애</li>';
    const list3 = $('#list3');
    list3.children().eq(2).after(`❤${li}`);
 

    list3.prepend(`첫째${li}`);
    list3.append(`막내${li}`);

    //위치 특정해서 조작

    const list3Lis = $('#list3 li');
    list3Lis.eq(4).before(`${li}`);
    list3Lis.eq(4).after(`${li}`);
   




})


//기다렸다 읽고 나면 실행해 