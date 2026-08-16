// =====================================================
// EL ESPECTRO DE LA FUERZA
// script.js
// =====================================================

// -----------------------------------------------------
// 1. COLECCIÓN PRINCIPAL
// -----------------------------------------------------

const reflexiones = [
  {
    color: "violeta",
    titulo: "No todo lo que puede hacerse debe hacerse",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/No%20todo%20lo%20que%20puede%20hacerse%20debe%20hacerse.png",
    youtube: "https://www.youtube.com/post/Ugkxt88FiYUThHYuDtozdTn3DWJYSmXieVxv"
  },

  {
    color: "rojo",
    titulo: "La tentación del control",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/la%20tentacion%20del%20control.png",
    youtube: "https://www.youtube.com/post/UgkxX0p67iivN65fwaRhDz7LIGwZmvrhBlRD"
  },

  {
    color: "azul",
    titulo: "La verdadera fuerza sabe contenerse",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/El%20poder%20tambi%C3%A9n%20sabe%20detenerse.png",
    youtube: "https://www.youtube.com/post/UgkxX9arhU5Mp-LamHq597JhyuewuQmF2gei"
  },

  {
    color: "verde",
    titulo: "Cuando la fuerza se vuelve cuidado",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/Cuando%20la%20fuerza%20se%20vuelve%20cuidado.png",
    youtube: "https://www.youtube.com/post/UgkxQsM8LmoAoPYNmSpxDY0cUUmhxUQmzXIa"
  },

  {
    color: "amarillo",
    titulo: "Saber más sin dejar de maravillarse",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/Toda%20experiencia%20puede%20convertirse%20en%20ense%C3%B1anza.png",
    youtube: "https://www.youtube.com/post/UgkxvvdWeZOJqnO8EVY5lRXiBaVusCZB8_FG"
  },

  {
    color: "rosa",
    titulo: "No toda fuerza necesita imponerse",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/No%20toda%20fuerza%20necesita%20imponerse.png",
    youtube: "https://www.youtube.com/post/UgkxEnQUKPj_5XlhsLc5ogepQyIgE9MfniIp"
  },

  {
    color: "añil",
    titulo: "Observar profundamente sin invadir",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/observar%20profundamente%20sin%20invadir.png",
    youtube: "https://www.youtube.com/post/UgkxsV40oiHTf-wP9M8ojzhfwoVwhJrOM9ID"
  },

  {
    color: "negro",
    titulo: "El lado oscuro empieza mucho antes de la violencia",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/El%20lado%20oscuro%20empieza%20mucho%20antes%20de%20la%20violencia.png",
    youtube: "https://www.youtube.com/post/Ugkx-JTNsVJg67MjQ1BX9I_ck7wAnSWowNQV"
  },

  {
    color: "blanco",
    titulo: "La unidad no exige uniformidad",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/La%20unidad%20no%20exige%20uniformidad.png",
    youtube: "https://www.youtube.com/post/Ugkx5JvPaURhWhlvYQ-bylFI2xVqvBgS1Z0w"
  },

  {
    color: "gris",
    titulo: "No todo es blanco o negro",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/No%20todo%20es%20blanco%20o%20negro.png",
    youtube: "https://www.youtube.com/post/UgkxUFwFOVfWcDzegnJqf4GAXE3uKPzQMzHp"
  },

  {
    color: "marron",
    titulo: "Lo que crece necesita raíces",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/Lo%20que%20crece%20necesita%20ra%C3%ADces.png",
    youtube: "https://www.youtube.com/post/UgkxFbKEkw5TZVwpCOz1fs8vQxGGk6IAxY6h"
  },

  {
    color: "turquesa",
    titulo: "Nadie piensa completamente solo",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/Nadie%20piensa%20completamente%20solo.png",
    youtube: "https://www.youtube.com/post/UgkxckjEzNenb4vO2Y48sXhhunHWlMmXtCUI"
  },

  {
    color: "plateado",
    titulo: "La identidad se transforma",
    imagen: "https://ik.imagekit.io/supermediaforge/espectro-de-la-fuerza/La%20identidad%20se%20transforma.png",
    youtube: "https://www.youtube.com/post/UgkxbXviTzwkOOl3MNTUx6RCwUrAUeRHKA2m"
  }
];


// -----------------------------------------------------
// 2. FUNCIÓN PARA CREAR LAS TARJETAS
// -----------------------------------------------------

function generarTarjetas() {

  const contenedor = document.getElementById("grid-reflexiones");

  // Si el contenedor todavía no existe en el HTML,
  // detenemos la función para evitar errores.
  if (!contenedor) {
    console.warn(
      'No se encontró un elemento con id="grid-reflexiones".'
    );

    return;
  }

  // Limpiamos el contenedor por si la función
  // se ejecuta más de una vez.
  contenedor.innerHTML = "";


  // Recorremos toda la colección.
  reflexiones.forEach((reflexion, indice) => {

    // -----------------------------------------
    // Tarjeta principal
    // -----------------------------------------

    const tarjeta = document.createElement("article");

    tarjeta.classList.add("tarjeta-reflexion");

    tarjeta.dataset.color = reflexion.color;

    tarjeta.dataset.indice = indice;


    // -----------------------------------------
    // Imagen
    // -----------------------------------------

    const imagen = document.createElement("img");

    imagen.src = reflexion.imagen;

    imagen.alt = reflexion.titulo;

    imagen.loading = "lazy";

    imagen.classList.add("tarjeta-imagen");


    // -----------------------------------------
    // Contenido de la tarjeta
    // -----------------------------------------

    const contenido = document.createElement("div");

    contenido.classList.add("tarjeta-contenido");


    // -----------------------------------------
    // Nombre del color
    // -----------------------------------------

    const color = document.createElement("span");

    color.classList.add("tarjeta-color");

    color.textContent = reflexion.color;


    // -----------------------------------------
    // Título
    // -----------------------------------------

    const titulo = document.createElement("h3");

    titulo.classList.add("tarjeta-titulo");

    titulo.textContent = reflexion.titulo;


    // -----------------------------------------
    // Enlace a YouTube
    // -----------------------------------------

    const enlace = document.createElement("a");

    enlace.classList.add("tarjeta-enlace");

    enlace.href = reflexion.youtube;

    enlace.target = "_blank";

    enlace.rel = "noopener noreferrer";

    enlace.textContent = "Leer la reflexión →";


    // -----------------------------------------
    // Construimos el contenido
    // -----------------------------------------

    contenido.appendChild(color);

    contenido.appendChild(titulo);

    contenido.appendChild(enlace);


    // -----------------------------------------
    // Construimos la tarjeta
    // -----------------------------------------

    tarjeta.appendChild(imagen);

    tarjeta.appendChild(contenido);


    // -----------------------------------------
    // Insertamos la tarjeta en la galería
    // -----------------------------------------

    contenedor.appendChild(tarjeta);

  });


  console.log(
    `${reflexiones.length} reflexiones cargadas correctamente.`
  );
}


// -----------------------------------------------------
// 3. INICIAR LA WEB
// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  generarTarjetas();

});

// -----------------------------------------------------
// 4. RULETA DE REFLEXIONES
// -----------------------------------------------------

const coloresRuleta = {
  violeta: "#7657c9",
  rojo: "#b63f4b",
  azul: "#376fb7",
  verde: "#3c8e6a",
  amarillo: "#d0ad3f",
  rosa: "#c3618e",
  "añil": "#4f57a6",
  negro: "#161922",
  blanco: "#e7e8e4",
  gris: "#7f8691",
  marron: "#805b3d",
  turquesa: "#3caaa7",
  plateado: "#aeb8c5"
};

let rotacionRuleta = 0;
let ruletaGirando = false;


function colorParaRuleta(nombreColor, indice) {

  if (coloresRuleta[nombreColor]) {
    return coloresRuleta[nombreColor];
  }

  // Si en el futuro aparece un color nuevo sin equivalencia visual,
  // generamos automáticamente un tono para no romper la rueda.
  const tono = Math.round((indice * 360) / reflexiones.length);

  return `hsl(${tono} 48% 48%)`;
}


function construirRuleta() {

  const disco = document.getElementById("ruleta-disco");

  if (!disco || reflexiones.length === 0) {
    return;
  }

  const tamanoSector = 360 / reflexiones.length;

  const sectores = reflexiones.map((reflexion, indice) => {

    const inicio = indice * tamanoSector;
    const fin = (indice + 1) * tamanoSector;
    const color = colorParaRuleta(reflexion.color, indice);

    return `${color} ${inicio}deg ${fin}deg`;

  });

  disco.style.background = `conic-gradient(from -${tamanoSector / 2}deg, ${sectores.join(", ")})`;
}


function mostrarResultadoRuleta(reflexion) {

  const resultado = document.getElementById("ruleta-resultado");

  if (!resultado) {
    return;
  }

  resultado.innerHTML = "";

  const anuncio = document.createElement("p");
  anuncio.className = "ruleta-eleccion";
  anuncio.textContent = "La Fuerza eligió";

  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta-reflexion ruleta-tarjeta";
  tarjeta.dataset.color = reflexion.color;

  const imagen = document.createElement("img");
  imagen.className = "tarjeta-imagen";
  imagen.src = reflexion.imagen;
  imagen.alt = reflexion.titulo;
  imagen.loading = "lazy";

  const contenido = document.createElement("div");
  contenido.className = "tarjeta-contenido";

  const color = document.createElement("span");
  color.className = "tarjeta-color";
  color.textContent = reflexion.color;

  const titulo = document.createElement("h3");
  titulo.className = "tarjeta-titulo";
  titulo.textContent = reflexion.titulo;

  const enlace = document.createElement("a");
  enlace.className = "tarjeta-enlace";
  enlace.href = reflexion.youtube;
  enlace.target = "_blank";
  enlace.rel = "noopener noreferrer";
  enlace.textContent = "Leer la reflexión →";

  contenido.appendChild(color);
  contenido.appendChild(titulo);
  contenido.appendChild(enlace);

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(contenido);

  resultado.appendChild(anuncio);
  resultado.appendChild(tarjeta);
}


function girarRuleta() {

  if (ruletaGirando || reflexiones.length === 0) {
    return;
  }

  const disco = document.getElementById("ruleta-disco");
  const boton = document.getElementById("boton-girar");
  const resultado = document.getElementById("ruleta-resultado");

  if (!disco || !boton || !resultado) {
    return;
  }

  ruletaGirando = true;
  boton.disabled = true;

  resultado.innerHTML = `
    <div class="ruleta-estado">
      <p class="ruleta-resultado-etiqueta">La rueda está girando</p>
      <h3>...</h3>
    </div>
  `;

  const indiceElegido = Math.floor(Math.random() * reflexiones.length);
  const tamanoSector = 360 / reflexiones.length;

  // El sector 0 está centrado arriba gracias al desplazamiento
  // del conic-gradient. Giramos el sector elegido hasta el puntero.
  const anguloObjetivo = 360 - (indiceElegido * tamanoSector);
  const vueltasExtra = 5 + Math.floor(Math.random() * 3);
  const rotacionActualNormalizada = ((rotacionRuleta % 360) + 360) % 360;
  const avanceHastaObjetivo = (anguloObjetivo - rotacionActualNormalizada + 360) % 360;

  rotacionRuleta += (vueltasExtra * 360) + avanceHastaObjetivo;

  disco.style.transform = `rotate(${rotacionRuleta}deg)`;

  const finalizarGiro = () => {

    mostrarResultadoRuleta(reflexiones[indiceElegido]);

    boton.disabled = false;
    ruletaGirando = false;

  };

  const movimientoReducido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (movimientoReducido) {
    window.setTimeout(finalizarGiro, 30);
  } else {
    window.setTimeout(finalizarGiro, 4900);
  }
}


// -----------------------------------------------------
// 5. ACTIVAR LA RULETA
// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  construirRuleta();

  const boton = document.getElementById("boton-girar");

  if (boton) {
    boton.addEventListener("click", girarRuleta);
  }

});
