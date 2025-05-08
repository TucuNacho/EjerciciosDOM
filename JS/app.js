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

document.querySelector('.btn-outline-warning')
console.log(btnCambiarTitulo)
//agregar un manejador de eventos
// btnCambiarTitulo.addEventListener('click', cambiarTituloInnerHTML)

const ocultarParrafo = () => {
    console.log("Hola Mundo desde ocultarParrafo");
    const parrafos = document.getElementsByTagName("p")
    const btnOcultar = document.querySelector(".btn-danger")
    console.log(parrafos[2]);
    parrafos[2].classList.add("d-none")
    btnOcultar.textContent = "Mostrar parrafo"
}