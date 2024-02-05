// new Audio object
const boom = new Audio('sounds/boom.wav');
const clap = new Audio('sounds/clap.wav');
const hihat = new Audio('sounds/hihat.wav');
const kick = new Audio('sounds/kick.wav');
const openhat = new Audio('sounds/openhat.wav');
const ride = new Audio('sounds/ride.wav');
const snare = new Audio('sounds/snare.wav');
const tink = new Audio('sounds/tink.wav');
const tom = new Audio('sounds/tom.wav');



// event listener document (keypress)
const boomAKey = document.body;

boomAKey.addEventListener('keypress', (board) => {
   if (board.code == "KeyA") { 
    boom.load(), boom.play()
} else if (board.code == "KeyS") {
    clap.load(), clap.play()
} else if (board.code == "KeyD") {
    hihat.load(), hihat.play()
} else if (board.code == "KeyQ") {
    kick.load(), kick.play()
} else if (board.code == "KeyW") {
    openhat.load(), openhat.play()
} else if (board.code == "KeyE") {
    ride.load(), ride.play()
} else if (board.code == "KeyJ") {
    snare.load(), snare.play()
} else if (board.code == "KeyK") {
    tink.load(), tink.play()
} else if (board.code == "KeyL") {
    tom.load(), tom.play()
} else {
    return false
}});

// Function to play audio based on button click
function playAudio(sound) {
    sound.load();
    sound.play();
}

// Event listener for individual elements (mouse click)
document.getElementById('boom').addEventListener('click', () => playAudio(boom));
document.getElementById('clap').addEventListener('click', () => playAudio(clap));
document.getElementById('hihat').addEventListener('click', () => playAudio(hihat));
document.getElementById('kick').addEventListener('click', () => playAudio(kick));
document.getElementById('openhat').addEventListener('click', () => playAudio(openhat));
document.getElementById('ride').addEventListener('click', () => playAudio(ride));
document.getElementById('snare').addEventListener('click', () => playAudio(snare));
document.getElementById('tink').addEventListener('click', () => playAudio(tink));
document.getElementById('tom').addEventListener('click', () => playAudio(tom)); 


// event listener individual elements (mouse click)
// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
