/*Datos necesarios:
Scroll total de la ventana: document.body.scrollHeight
Alto de la ventana: window.innerHeight
Cantidad de scroll: window.scrollY
*/

/*## VARIABLES CSS

- Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

- Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

- Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón

- Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.*/

/* Llamada a las variables CSS*/
const rootStyles = document.documentElement.style;

/*Llamada elementos*/
const textElement = document.getElementById("text");
const buttonRGBElement = document.getElementById("buttonRGB");
const buttonHexElement = document.getElementById("buttonHex");
const mouseboxElement = document.getElementById("mousebox");

/*modificción
rootStyles.setProperty(nombreVariable, nuevoValor);*/

/*Fondo de pantalla*/

/*RGB: generar 3 numeros aleatorios que rellenen un array */
const colorRGB = () => {
  const randomColor = Math.floor(Math.random() * 255);
  const randomColor2 = Math.floor(Math.random() * 255);
  const randomColor3 = Math.floor(Math.random() * 255);
  const newColor = `rgb(${randomColor},${randomColor2},${randomColor3})`;

  rootStyles.setProperty("--bgColor", newColor);
};

buttonRGBElement.addEventListener("click", colorRGB);

/*Hex: 6 cifras numeros y letras de la A a la F*/

const colorHex = () => {
  const characters = "0123456789ABCDEF";
  let newCombination = "#";

  for (let i = 0; i < 6; i++) {
    const randomHex = characters[Math.floor(Math.random() * characters.length)];
    newCombination = newCombination + randomHex;
  }
  rootStyles.setProperty("--bgColor", newCombination);
};

buttonHexElement.addEventListener("click", colorHex);
