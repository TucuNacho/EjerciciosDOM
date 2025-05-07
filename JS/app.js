const cambiarTitulo = () => {
  console.log("Hola Mundo");
  const titulo = document.getElementById("titulo");
  console.log(titulo);
  titulo.textContent = "Hola Mundo desde JS";
  titulo.classList.add("text-primary");
};

const cambiarTituloInnerHTML = () => {
  console.log("hola mundo");
};

const btnCambiarTitulo = document.getElementsByClassName("btn-outline-warning");
console.log(btnCambiarTitulo);
