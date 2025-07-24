
function colorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function aplicarColores(elemento) {
    const color1 = colorAleatorio();
    const color2 = colorAleatorio();
    const color3 = colorAleatorio();

    elemento.style.background = `linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
    elemento.style.color = '#fff'; 
    elemento.style.transition = 'background 0.5s ease';
}

const bloques = document.querySelectorAll('.col-4');

bloques.forEach(bloque => {
    bloque.addEventListener('click', () => {
        aplicarColores(bloque);
    });
});