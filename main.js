const $container = document.getElementById('container');
const $ball = document.getElementById('ball');
const $body = document.getElementById('body');
const $button = document.getElementById('button');

let x = $ball.style.left;
let y = $ball.style.top;
let radius = 50;
let speed = 100;
let gameTime;

let up = false;
let down = false;
let left = false;
let right = false;

const init = ()=>{
   gameTime = setInterval(init, 1000/60);
   status();
   checkLimit(); 
}

const status = ()=>{
    if (up) {
        y -= speed;
    }
    if (down) {
        y += speed;
    }
    if (left) {
        x -= speed;
    }
    if (right) {
        x += speed;
    } 
}

$button.addEventListener('click',init);
$body.addEventListener("keydown", keyDown);
$body.addEventListener("keyup", keyUp);

const keyDown = (event)=>{
    //up
    if (event.keyCode == 38) {
        up = true;
    }

    //down
    if (event.keyCode == 40) {
        down = true;
    }
    //left
    if (event.keyCode == 37) {
        left = true;
    }

    //right
    if (event.keyCode == 39) {
        right = true;
    }
}
const keyUp = ()=>{
    //up
    if (event.keyCode == 38) {
        up = false;
    }

    //down
    if (event.keyCode == 40) {
        down = false;
    }
    //left
    if (event.keyCode == 37) {
        left = false;
    }

    //right
    if (event.keyCode == 39) {
        right = false;
    }
}