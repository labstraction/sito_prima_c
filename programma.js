

let foglio = document.getElementById('foglio');

let disegno = foglio.getContext('2d');

disegno.fillStyle = 'red'

disegno.fillRect(0,0, 100, 50)

disegno.fillStyle = 'green'

disegno.fillRect(30, 30, 100, 50)


let foglio2 = document.getElementById('foglio2');

let disegno2 = foglio2.getContext('2d');

foglio2.addEventListener('click', (evento) => {
    disegno2.strokeRect(evento.offsetX, evento.offsetY, 500 * Math.random(), 500 * Math.random());
});