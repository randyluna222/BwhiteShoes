$(document).ready(function() {
  // Función para mostrar u ocultar el menú al hacer clic en el icono
  $('.menu-icon').click(function() {
      $('.menu-items').slideToggle();
  });

  // Función para ocultar el menú cuando se hace clic en un enlace
  $('.menu-items li a').click(function() {
      $('.menu-items').slideUp();
  });
});

function functio(small){
  const full = document.getElementById("imagebox");
  full.src = small.src
}
