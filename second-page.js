document.addEventListener('DOMContentLoaded', function() {
  // Leer los detalles del producto del almacenamiento local
  const productTitle = localStorage.getItem('productTitle');
  const productImage = localStorage.getItem('productImage');
  const productDescription = localStorage.getItem('productDescription');
  const productPrice = localStorage.getItem('productPrice');

  // Mostrar los detalles del producto en la página
  document.getElementById('product-title').innerText = productTitle;
  document.getElementById('product-image').src = productImage;
  document.getElementById('product-description').innerText = productDescription;
  document.getElementById('product-price').innerText = productPrice;
});


// Obtener el botón de compartir
const shareBtn = document.querySelector('.share-btn');

// Agregar un evento de clic al botón de compartir
shareBtn.addEventListener('click', function() {
  // Obtener el enlace de la página actual
  const currentPageUrl = window.location.href;
  
  // Intentar abrir la ventana de compartir en WhatsApp
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentPageUrl)}`;
  window.open(whatsappUrl, '_blank');
});


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
