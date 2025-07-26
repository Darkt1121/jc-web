document.addEventListener('DOMContentLoaded', function() {

  // --- VARIABLES ---
  // Menú móvil
  const menuButton = document.getElementById('menuButton');
  const closeMenuButton = document.getElementById('closeMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
  
  // Animación del Hero
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroButtons = document.getElementById('heroButtons');

  // Header dinámico
  const header = document.getElementById('mainHeader');
  const headerTextElements = header ? header.querySelectorAll('a, button') : [];


  // --- LÓGICA DEL MENÚ MÓVIL ---
  function openMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
      mobileMenu.classList.add('translate-y-0', 'opacity-100');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('-translate-y-full', 'opacity-0');
      mobileMenu.classList.remove('translate-y-0', 'opacity-100');
      document.body.classList.remove('overflow-hidden');
    }
  }

  if (menuButton) menuButton.addEventListener('click', openMenu);
  if (closeMenuButton) closeMenuButton.addEventListener('click', closeMenu);
  if (mobileMenuItems) {
    mobileMenuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });
  }


  // --- LÓGICA DE ANIMACIÓN DEL HERO ---
  function animateElement(element) {
    if (element) {
      void element.offsetWidth; // Forza reflujo
      element.classList.remove('opacity-0', 'translate-y-5');
    }
  }
  
  setTimeout(() => {
    animateElement(heroTitle);
    animateElement(heroSubtitle);
    animateElement(heroButtons);
  }, 50);


  // --- LÓGICA DEL HEADER DINÁMICO CON SCROLL ---
  function handleScroll() {
    // Si no existe el header, no hagas nada.
    if (!header) return;

    if (window.scrollY > 50) {
      // Estado "scrolled": fondo sólido y texto oscuro
      header.classList.add('bg-white', 'shadow-md');
      header.classList.remove('bg-opacity-25', 'md:bg-opacity-40');
      headerTextElements.forEach(element => {
        element.classList.remove('text-white');
        element.classList.add('text-gray-800');
      });
    } else {
      // Estado "top": fondo transparente y texto blanco
      header.classList.remove('bg-white', 'shadow-md');
      header.classList.add('bg-opacity-25', 'md:bg-opacity-40');
      headerTextElements.forEach(element => {
        element.classList.remove('text-gray-800');
        element.classList.add('text-white');
      });
    }
  }

  // Agrega el listener para el evento de scroll
  window.addEventListener('scroll', handleScroll);

});



document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.marquee-content');
    const group = document.querySelector('.marquee-group');

    // Si no encuentra los elementos, no hace nada
    if (!content || !group) return;

    // 1. Mide el ancho necesario
    const containerWidth = content.parentElement.offsetWidth;
    const groupWidth = group.offsetWidth;

    // 2. Calcula cuántas veces repetir el grupo de servicios
    const copiesNeeded = Math.ceil(containerWidth / groupWidth) + 1;

    // 3. Obtiene el HTML del grupo original y lo repite para crear una tira larga
    const longGroupHTML = group.innerHTML.repeat(copiesNeeded);

    // 4. Construye los dos grupos finales y los inyecta en el HTML
    content.innerHTML = `
      <div class="flex shrink-0 items-center">${longGroupHTML}</div>
      <div class="flex shrink-0 items-center" aria-hidden="true">${longGroupHTML}</div>
    `;
  });


// --- SLIDER DE PROYECTOS ---
const track = document.getElementById('slider-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const counter = document.getElementById('slide-counter');

// Si los elementos del slider no existen, no ejecutes el código.
if (track && slides.length > 0) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Función para mover el slider y actualizar la UI
  const updateSlider = () => {
    // Mueve el track usando transform
    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
    
    // Actualiza el contador
    counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
  };

  // Evento para el botón "Siguiente"
  nextButton.addEventListener('click', () => {
    currentIndex++;
    // Si llega al final, vuelve al principio (loop)
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    updateSlider();
  });

  // Evento para el botón "Anterior"
  prevButton.addEventListener('click', () => {
    currentIndex--;
    // Si está en el primero y va hacia atrás, va al final (loop)
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }
    updateSlider();
  });
  
  // Ajustar el tamaño del slide si la ventana cambia de tamaño
  window.addEventListener('resize', () => {
      // Necesitamos recalcular el ancho aquí, pero para simplificar,
      // esta versión básica funciona mejor con anchos fijos.
      // Una versión avanzada recalcularía el `slideWidth` y llamaría a `updateSlider`.
      // Por ahora, recargar la página tras un cambio de tamaño grande es una solución simple.
  });

  // Inicializa el slider en la primera posición
  updateSlider();
}



document.addEventListener('DOMContentLoaded', function() {
    const ctaSection = document.getElementById('ctaSection'); // El observador vigilará esta sección
    const ctaTitle = document.getElementById('ctaTitle');
    const ctaSubtitle = document.getElementById('ctaSubtitle');
    const ctaButton = document.getElementById('ctaButton');

    // Elementos a animar individualmente
    const elementsToAnimate = [ctaTitle, ctaSubtitle, ctaButton];

    // Configuración del Intersection Observer
    const observerOptions = {
        root: null, // Observa intersecciones con el viewport
        rootMargin: '0px',
        threshold: 0.2 // Se activa cuando al menos el 20% del elemento está visible
                       // Puedes ajustar este valor (0.1 para 10%, 0.5 para 50%, etc.)
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // El elemento (o la sección) está visible
                elementsToAnimate.forEach(el => {
                    if (el) {
                        // Quita las clases que ocultan y desplazan para iniciar la transición CSS
                        // Las clases de delay en el HTML se encargarán del escalonamiento
                        el.classList.remove('opacity-0', 'translate-y-5');
                    }
                });
                observer.unobserve(entry.target); // Deja de observar una vez que la animación se ha disparado
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (ctaSection) {
        observer.observe(ctaSection); // Empezar a observar la sección CTA
    }
});







