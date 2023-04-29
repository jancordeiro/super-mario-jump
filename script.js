const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameover = document.querySelector('.gameover-btn');

const jump = () => {
	mario.classList.add('jump');

	setTimeout(() => {
		mario.classList.remove('jump');
	}, 500);
}

const loop = setInterval(() => {

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

	// console.log(marioPosition);

	if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
	
		pipe.style.animation = 'none';
		pipe.style.left = `${pipePosition}px`;
	
		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;
		
		mario.src = 'img/game-over.png';
		mario.style.width = '80px';
		mario.style.left = '50px';
		
		clouds.style.display = 'none';
		gameover.style.display = 'block';
		
		clearInterval(loop);
	}
	
}, 10);

function atualizar(){
	location.reload();
}

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
