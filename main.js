const $container = document.getElementById('container');
const $ball = document.getElementById('ball');
const $body = document.getElementById('body');
const $button = document.getElementById('button');

 
let radius = 50;
let speed = 10;
//let gameTime;

$button.addEventListener('click', () => {
    $ball.style.position = 'absolute';
    $ball.style.left = 0;
    $ball.style.top = 0;
});

$body.addEventListener('keydown', ($event) => {
    if ($event.key == 'ArrowLeft' ) {$ball.style.left = parseInt($ball.style.left) - speed + 'px';}
    if ($event.key == 'ArrowRight') {$ball.style.left = parseInt($ball.style.left) + speed + 'px'; }    
    if ($event.key == 'ArrowUp') {$ball.style.top = parseInt($ball.style.top) - speed + 'px'; }  
    if ($event.key == 'ArrowDown') {$ball.style.top = parseInt($ball.style.top) + speed + 'px'; }  
});
