const letras = {
  A: { palabra: "Avión", imagen: "images/a-avion.png" },
  B: { palabra: "Ballena", imagen: "images/b-ballena.png" },
  C: { palabra: "Casa", imagen: "images/c-casa.png" },
  D: { palabra: "Dado", imagen: "images/d-dado.png" },
  E: { palabra: "Elefante", imagen: "images/e-elefante.png" },
  F: { palabra: "Foca", imagen: "images/f-foca.png" },
  G: { palabra: "Gato", imagen: "images/g-gato.png" },
  H: { palabra: "Helado", imagen: "images/h-helado.png" },
  I: { palabra: "Iglú", imagen: "images/i-iglu.png" },
  J: { palabra: "Jirafa", imagen: "images/j-jirafa.png" },
  K: { palabra: "Koala", imagen: "images/k-koala.png" },
L: { palabra: "Luna", imagen: "images/l-luna.png" },
  M: { palabra: "Manzana", imagen: "images/m-manzana.png" },
  N: { palabra: "Nido", imagen: "images/n-nido.png" },
  Ñ: { palabra: "Ñandú", imagen: "images/n-nandu.png" },
  O: { palabra: "Oso", imagen: "images/o-oso.png" },
  P: { palabra: "Pelota", imagen: "images/p-pelota.png" },
  Q: { palabra: "Queso", imagen: "images/q-queso.png" },
  R: { palabra: "Ratón", imagen: "images/r-raton.png" },
  S: { palabra: "Sol", imagen: "images/s-sol.png" },
  T: { palabra: "Tigre", imagen: "images/t-tigre.png" },
  U: { palabra: "Uvas", imagen: "images/u-uvas.png" },
  V: { palabra: "Vaca", imagen: "images/v-vaca.png" },
  W: { palabra: "Wafle", imagen: "images/w-wafle.png" },
  X: { palabra: "Xilófono", imagen: "images/x-xilofono.png" },
  Y: { palabra: "Yate", imagen: "images/y-yate.png" },
  Z: { palabra: "Zorro", imagen: "images/z-zorro.png" }
};
const tablero = document.getElementById("tablero");
const palabra = document.getElementById("palabra");
const imagen = document.getElementById("imagen");
const letraMostrar = document.getElementById("letra-mostrar");
function getRandomColor() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}
function aplicarColoresAleatorios(elemento) {
  elemento.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}
function crearTablero() {
  for (const letra in letras) {
    const div = document.createElement("div");
    div.classList.add("letra");
    div.textContent = letra;
    div.addEventListener("click", () => {
      letraMostrar.textContent = letra;
      palabra.textContent = `For ${letras[letra].palabra}`;
      imagen.src = letras[letra].imagen;
      imagen.alt = letras[letra].palabra;
      aplicarColoresAleatorios(div);
    });
    tablero.appendChild(div);
  }
}
crearTablero();