const app= document.getElementById('typewriter');

const typewriter= new Typewriter(app, {
	loop: true,
	delay: 75
});

typewriter
.typeString('Tu Lugar en el Mundo')
pauseFor(200)
.start();