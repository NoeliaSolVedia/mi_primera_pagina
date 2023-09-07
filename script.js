
function menu() {
  var menu = document.getElementById("navbar");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

window.addEventListener("resize", function() {
  var menu = document.getElementById("navbar");
  if (window.innerWidth >= 600) {
     menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

function validarFormulario(event) {
  event.preventDefault(); // para evitar el envío automático del formulario
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var erNombre = /^[a-zA-Z\s]+$/;  //expresion regular para validar el nombre
  var erCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular para validar el correo
  var messageElement = document.getElementById("mjeValidacion");

  // validamos que los campos no estén vacíos
  if (nombre === " " || correo === " ") {
    messageElement.innerText = "Por favor, completa todos los campos.";
    messageElement.style.color = "red";
    // alert("Por favor, completa todos los campos.");
  }
  else
    // validamos que el nombre no contenga dígitos
    if (!erNombre.test(nombre)) {
      messageElement.innerText = "El nombre no debe contener dígitos";
      messageElement.style.color = "red";
      //alert("El nombre no debe contener dígitos.");
    }
    else
      // validamos formato de correo electrónico
     if (!erCorreo.test(correo)) {
       //alert("Por favor, ingresa un correo electrónico válido.");
       messageElement.innerText = "Ingresa un correo electrónico válido.";
       messageElement.style.color = "red";
     }
     else{
      messageElement.innerText = "Los datos fueron enviados correctamente.";
      messageElement.style.color = "green";
     }
}


const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;

function showSlide(index) {
  const slides = slidesContainer.querySelectorAll('img');
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function showNextSlide() {
  slideIndex++;
  const slides = slidesContainer.querySelectorAll('img');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function showPrevSlide() {
  slideIndex--;
  const slides = slidesContainer.querySelectorAll('img');
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

showSlide(slideIndex);