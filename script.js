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


document.addEventListener('DOMContentLoaded', function () {
  const splideElement = document.querySelector('.splide');
  
  if (splideElement) {
    const splide = new Splide(splideElement, {
      type       : 'loop', // Crea un carrusel infinito
      perPage    : 1,      // Muestra 1 slide a la vez
      perMove    : 1,      // Mueve 1 slide a la vez
      gap        : '1rem', // Espacio entre slides (16px)
      pagination : false,  // Oculta los puntos de navegación
      
      // Con esta opción logramos el efecto de "ver un poco del siguiente slide"
      padding: { right: '33rem' }, 
      
      // Opciones para que se vea bien en móvil
      breakpoints: {
        768: {
          padding: { right: '0,5rem' }, // Menos padding en pantallas más pequeñas
        },
      },
    });

    // --- Lógica para el contador personalizado ---
    const counter = document.getElementById('splide-counter');
    if (counter) {
      // Al iniciar el carrusel
      splide.on('mounted', function () {
        counter.textContent = `${splide.index + 1} / ${splide.length}`;
      });
      // Cada vez que se mueve
      splide.on('move', function () {
        counter.textContent = `${splide.index + 1} / ${splide.length}`;
      });
    }

    splide.mount();
  }
});



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







