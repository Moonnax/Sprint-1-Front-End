const form = document.querySelector(".form");

const apenasTexto = /^[A-Za-zÀ-ÿ\s]+$/;
const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const telMinimo = (tel) => {
  let numeros = 0;
  for (let i = 0; i < tel.length; i++) {
    if (tel[i] >= '0' && tel[i] <= '9') numeros++;
  }
  return numeros >= 11;
};
