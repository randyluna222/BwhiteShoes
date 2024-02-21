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


//----------------------------------------------- Carroulle ----------------------------------------------------

if(document.querySelector('#container-slider')){
  setInterval('funcionEjecutar("siguiente")',6000);
}
//------------------------------ LIST SLIDER -------------------------
if(document.querySelector('.listslider')){
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function(link) {
     link.addEventListener('click', function(e){
        e.anteriorentDefault();
        let item = this.getAttribute('itlist');
        let arrItem = item.split("_");
        funcionEjecutar(arrItem[1]);
        return false;
     });
   });
}
function funcionEjecutar(side){
   let parentTarget = document.getElementById('slider');
   let elements = parentTarget.getElementsByTagName('li');
   let curElement, siguienteElement;
   for(var i=0; i<elements.length;i++){
       if(elements[i].style.opacity==1){
           curElement = i;
           break;
       }
   }
   if(side == 'anterior' || side == 'siguiente'){
       if(side=="anterior"){
           siguienteElement = (curElement == 0)?elements.length -1:curElement -1;
       }else{
           siguienteElement = (curElement == elements.length -1)?0:curElement +1;
       }
   }else{
       siguienteElement = side;
       side = (curElement > siguienteElement)?'anterior':'siguiente';
   }
   
   //PUNTOS INFERIORES
   let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
   elementSel[curElement].classList.remove("item-select-slid");
   elementSel[siguienteElement].classList.add("item-select-slid");
   elements[curElement].style.opacity=0;
   elements[curElement].style.zIndex =0;
   elements[siguienteElement].style.opacity=1;
   elements[siguienteElement].style.zIndex =1;
}





////////------------------Para compartir-------------------------------------------------



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

///-------------------------------Rederigir Página---------------------------------------


// Obtener todos los botones "Add To Cart"
const addToCartButtons = document.querySelectorAll('.btn');

// Iterar sobre cada botón "Add To Cart"
addToCartButtons.forEach(button => {
  // Agregar un evento de clic a cada botón
  button.addEventListener('click', function(event) {
    // Evitar que se ejecute la acción predeterminada del enlace
    event.preventDefault();
    
    // Obtener los detalles del producto
    const productCard = this.closest('.card');
    const productImage = productCard.querySelector('.image img').src;
    const productTitle = productCard.querySelector('.products_text h2').innerText;
    const productDescription = productCard.querySelector('.products_text p').innerText;
    const productPrice = productCard.querySelector('.products_text h3').innerText;

    // Almacenar los detalles del producto en el almacenamiento local
    localStorage.setItem('productTitle', productTitle);
    localStorage.setItem('productImage', productImage);
    localStorage.setItem('productDescription', productDescription);
    localStorage.setItem('productPrice', productPrice);

    // Redirigir a la página de destino
    window.location.href = 'pagina-de-destino.html';
  });
});
