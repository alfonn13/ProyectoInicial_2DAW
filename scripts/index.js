// Igualamos el id de dentro del parentesis a cambiocolor
const cambiacolor = document.getElementById('backgr');


// Funcion para cambiar el codigo en el body y que salga ese valor en el terminal
cambiacolor.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
    console.log('El color generado es ' + getRandomColor());
});


// Funcion para generar un color aleatorio al body
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

