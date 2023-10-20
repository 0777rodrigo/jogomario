const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout( () => {

mario.classList.remove('jump');

},500);

}

const loop = setInterval(() => {

console.log('loop')    

const pipePosition = pipe.offsetLeft;
const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

console.log(marioPosition)

if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

pipe.style.animation = 'none';
pipe.style.left = '${pipe.Position}px';

mario.style.animation = 'none';
mario.style.bottom = '${mario.Position}px';

mario.src = './images/game-over.png';
mario.style.width = '75px'
mario.style.marginLeft = '50px'

clearInterval(loop);

}

},10);

Document.addEventListener('keydown', jump);