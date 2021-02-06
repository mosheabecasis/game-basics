const $container = document.getElementById('container');
const $ball = document.getElementById('ball');
const $body = document.getElementById('body');
const $button = document.getElementById('button');

let radius = 50;
let speed = 10;
//let gameTime;
let cuurentPositionY = 0;
let cuurentPositionX = 0;

$button.addEventListener('click', () => {
    $ball.style.position = 'absolute';
    $ball.style.left = 0;
    $ball.style.top = 0;
    //setInterval(borderCheck, 500);
    
});

$body.addEventListener('keydown', ($event) => {
    if ($event.key == 'ArrowLeft' ) {$ball.style.left = parseInt($ball.style.left) - speed + 'px';}
    if ($event.key == 'ArrowRight') {$ball.style.left = parseInt($ball.style.left) + speed + 'px'; }  
    if ($event.key == 'ArrowUp') {$ball.style.top = parseInt($ball.style.top) - speed + 'px'; }  
    if ($event.key == 'ArrowDown') {$ball.style.top = parseInt($ball.style.top) + speed + 'px'; } 
     cuurentPositionY = parseInt($ball.style.top);
     cuurentPositionX = parseInt($ball.style.left);
    borderCheck(); 
    //console.log(cuurentPositionY);
    //console.log(cuurentPositionX);
});

let borderCheck = ()=>{
    if (parseInt($ball.style.top) < 0){$ball.style.top = 0;}
    if (parseInt($ball.style.left) < 0) { $ball.style.left = 0;}
    if (cuurentPositionY > 350) { $ball.style.top = 350 + 'px';}
    if (cuurentPositionX > 350) { $ball.style.left = 350 + 'px';}
}
