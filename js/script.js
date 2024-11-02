//constantes 
const boy = document.querySelector('.boy');
const barrier = document.querySelector('.barrier');

//script para pular
const jump = () =>{
    boy.classList.add('jump');

    setTimeout(() =>{
        boy.classList.remove('jump');
    }, 500)
}

//gameplay
const loop = setInterval(()=>{
    const barrierPosition = barrier.offsetLeft;
    const boyPosition = +window.getComputedStyle(boy).bottom.replace('px', '');

    if(barrierPosition <= 100 && barrierPosition > 0 && boyPosition < 70){
        barrier.style.animation = 'none' 
        barrier.style.left = `${barrierPosition}px`;

        boy.style.animation = 'none'
        boy.style.bottom = `${boyPosition}px`;

        boy.src = 'img/game-over.png'
        boy.style.width = '40px'
        boy.style.marginLeft = '10px'

        clearInterval(loop);
    }
}, 10)

//qualquer tecla vai fazer o boy pular
document.addEventListener('keydown', jump);  //adiciona evento de tecla pressionada