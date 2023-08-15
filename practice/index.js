

function greetings(){
    console.log('hello');
    console.log('안녕');
}
greetings();
greetings();

function hello(name){
    console.log('안녕하세요 '+name+'님!');
};

hello('소영');

function sing(singer, song){
    console.log(`제가 좋아하는 가수는 ${singer}입니다.`);
    console.log(`제가 좋아하는 곡은 ${song}입니다.`)
};
sing('','long way');


function star (x, y){
    console.log(x*y);
}
star(3,2);
function go(number){
    return number * 2;
}
console.log(go(2));
function min(number){
    return number * 2;
}
let x = min(2);
let y = min(4);
console.log(x*y);