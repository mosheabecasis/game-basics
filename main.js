const $container = document.getElementById('container');
const $ball = document.getElementById('ball');
const $body = document.getElementById('body');
const $button = document.getElementById('button');

//let x = $ball.style.left;
//let y = $ball.style.top;
let radius = 50;
let speed = 10;
let gameTime;

let up = false;
let down = false;
let left = false;
let right = false;

const init = ()=>{
   gameTime = setTimeout(status, 1000);
  //status();
   //checkLimit(); 
}

const status = ()=>{
    if (up) {
        $ball.style.top -= speed;
    }
    if (down) {
        $ball.style.top += speed;
    }
    if (left) {
        $ball.style.left -= speed;
    }
    if (right) {
        $ball.style.left += speed;
    } 
}

const keyDown = (event)=>{
    console.log(event);
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
const keyUp = (event)=>{
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
$button.addEventListener('click', init);
$body.addEventListener("keydown", keyDown);
$body.addEventListener("keyup", keyUp);
