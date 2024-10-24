const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

//SWIPER
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16,
});

//Scroll up
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 460) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//Sections active
const sections = document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener("scroll",scrollActive)
//Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  
});
sr.reveal(`.home-swiper,.new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100,
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });




// Get elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];
const imageLinks = document.querySelectorAll(".open-modal"); // Selecciona todas las imágenes

// When the user clicks on any image link, open the modal
imageLinks.forEach(function(imageLink) {
  imageLink.onclick = function (e) {
    e.preventDefault();
    modal.style.display = "block";
    modalImg.src = this.href; // Usa el href del link para cargar la imagen en el modal
  };
});

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};


//         JS para el modal
document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImg');
  var modalVideo = document.getElementById('modalVideo');
  var closeModal = document.querySelector('.close');
  var mediaElements = document.querySelectorAll('.trick__img, .trick__vid'); // Seleccionamos tanto imágenes como videos
  var currentIndex = 0;

  // Mostrar el modal cuando se hace clic en una imagen o video
  mediaElements.forEach((media, index) => {
    media.addEventListener('click', function(event) {
      event.preventDefault();
      modal.style.display = 'block';
      currentIndex = index; // Guardamos el índice del elemento actual
      
      // Si el elemento es una imagen
      if (this.tagName.toLowerCase() === 'img') {
        modalImg.style.display = 'block';
        modalVideo.style.display = 'none';
        modalImg.src = this.src; // Mostrar la imagen en el modal
      }
      // Si el elemento es un video
      else if (this.tagName.toLowerCase() === 'video') {
        modalImg.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = this.src; // Mostrar el video en el modal
        modalVideo.play(); // Reproducir el video automáticamente
      }
    });
  });

  // Cerrar el modal
  closeModal.onclick = function() {
    modal.style.display = 'none';
    modalVideo.pause(); // Pausar el video cuando se cierra el modal
  };

  // Función para mostrar el siguiente elemento (imagen o video)
  function showNextMedia() {
    currentIndex = (currentIndex + 1) % mediaElements.length; // Ir al siguiente índice
    var nextMedia = mediaElements[currentIndex];

    if (nextMedia.tagName.toLowerCase() === 'img') {
      modalImg.style.display = 'block';
      modalVideo.style.display = 'none';
      modalImg.src = nextMedia.src;
    } else if (nextMedia.tagName.toLowerCase() === 'video') {
      modalImg.style.display = 'none';
      modalVideo.style.display = 'block';
      modalVideo.src = nextMedia.src;
      modalVideo.play();
    }
  }

  // Función para mostrar el elemento anterior (imagen o video)
  function showPrevMedia() {
    currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
    var prevMedia = mediaElements[currentIndex];

    if (prevMedia.tagName.toLowerCase() === 'img') {
      modalImg.style.display = 'block';
      modalVideo.style.display = 'none';
      modalImg.src = prevMedia.src;
    } else if (prevMedia.tagName.toLowerCase() === 'video') {
      modalImg.style.display = 'none';
      modalVideo.style.display = 'block';
      modalVideo.src = prevMedia.src;
      modalVideo.play();
    }
  }

  // Eventos para las flechas
  document.querySelector('.next').addEventListener('click', showNextMedia);
  document.querySelector('.prev').addEventListener('click', showPrevMedia);

  // Cerrar el modal si se hace clic fuera de la imagen o video
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      modalVideo.pause(); // Pausar el video cuando se cierra el modal
    }
  };
});


app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo en http://0.0.0.0:3000');
});
