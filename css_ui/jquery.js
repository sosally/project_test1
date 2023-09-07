
let hamMenuIcon = $('#ham-menu');
let navBar = $('#nav-bar');
// let navLinks = document.querySelector('li'); 첫번째 하나만
let navLinks = $('li');


hamMenuIcon.click(function(){
    navBar.toggleClass('active');
    hamMenuIcon.toggleClass('fa-times');
})



