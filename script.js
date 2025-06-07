// JavaScript existente, con un pequeño ajuste para la animación
const menuButton = document.getElementById('menuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const mainHeader = document.getElementById('mainHeader'); // Asumiendo que tienes esto
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

function openMenu() {
    // Quita las clases que lo ocultan y lo desplazan
    mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
    // Añade clases para la posición final (opcional, pero asegura estado)
    mobileMenu.classList.add('translate-y-0', 'opacity-100');
    document.body.classList.add('overflow-hidden'); // Evitar scroll del body
}

function closeMenu() {
    // Añade clases para ocultar y desplazar hacia arriba
    mobileMenu.classList.add('-translate-y-full', 'opacity-0');
    mobileMenu.classList.remove('translate-y-0', 'opacity-100');
    document.body.classList.remove('overflow-hidden');
}

// Los listeners de eventos siguen igual
menuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);
mobileMenuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});

// ... el resto de tu JS (scroll del header, año, etc.)


// En tu archivo script.js

// En tu archivo script.js

document.addEventListener('DOMContentLoaded', function() {
    // --- Código del Menú (asegúrate que esté funcionando) ---
    const menuButton = document.getElementById('menuButton'); // o 'menuBtn' si no lo cambiaste
    const closeMenuButton = document.getElementById('closeMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    // const mainHeader = document.getElementById('mainHeader'); // Si lo usas para el scroll
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

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

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', openMenu);
    }
    if (closeMenuButton && mobileMenu) {
        closeMenuButton.addEventListener('click', closeMenu);
    }
    if (mobileMenuItems && mobileMenu) {
        mobileMenuItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }
    // --- Fin del Código del Menú ---


    // --- Código de Animación del Hero ---
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroButtons = document.getElementById('heroButtons');

    function animateElement(element) {
        if (element) {
            void element.offsetWidth; // Forza reflujo para asegurar que la transición se aplique
            element.classList.remove('opacity-0', 'translate-y-5');
        }
    }

    // Un pequeño retraso general para asegurar que todo esté listo antes de animar
    // Las clases 'delay-*' en el HTML controlarán el escalonamiento individual
    setTimeout(() => {
      animateElement(heroTitle);
      animateElement(heroSubtitle);
      animateElement(heroButtons);
    }, 50); // 50ms es usualmente suficiente

    // --- Otro JS que puedas tener (scroll del header, año, etc.) ---
    // Ejemplo para el año en el footer (si tienes un footer con id="currentYear")
    // const currentYearElement = document.getElementById('currentYear');
    // if (currentYearElement) {
    //     currentYearElement.textContent = new Date().getFullYear();
    // }
});











document.addEventListener('DOMContentLoaded', function() {
    // ... (tu código existente para el menú, hero, etc.) ...

    const carousel = document.getElementById('imageCarousel');

    if (carousel) {
        let isDown = false;    // Indica si el botón del mouse está presionado
        let startX;            // Posición X inicial del mouse al hacer clic
        let scrollLeft;        // Posición de scroll inicial del carrusel

        // Cambiar el cursor a "agarrando" cuando se presiona el mouse
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('cursor-grabbing'); // Cambia el cursor
            carousel.classList.remove('cursor-grab');
            startX = e.pageX - carousel.offsetLeft; // Posición X del mouse relativa al carrusel
            scrollLeft = carousel.scrollLeft;       // Scroll actual del carrusel
        });

        // Dejar de arrastrar y restaurar el cursor
        const stopDragging = () => {
            if (!isDown) return;
            isDown = false;
            carousel.classList.remove('cursor-grabbing');
            carousel.classList.add('cursor-grab');
        };

        carousel.addEventListener('mouseleave', stopDragging); // Si el mouse sale del carrusel
        carousel.addEventListener('mouseup', stopDragging);    // Si se suelta el botón del mouse

        // Mover el carrusel al mover el mouse
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Solo mover si el botón está presionado
            e.preventDefault(); // Evita acciones por defecto como seleccionar texto
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Multiplicador para la velocidad de arrastre (ajusta *2 si quieres)
            carousel.scrollLeft = scrollLeft - walk;
        });
    }

    // ... (otro código JS que puedas tener) ...
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







document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Usamos matchMedia para crear animaciones responsivas
    ScrollTrigger.matchMedia({
        
        // === ANIMACIÓN PARA DESKTOP (pantallas de 1024px o más) ===
        "(min-width: 1024px)": function() {
            const textSteps = gsap.utils.toArray(".text-step");
            const visualItems = gsap.utils.toArray(".visual-item");
            const textContents = gsap.utils.toArray(".text-content");

            gsap.set(visualItems.slice(1), { autoAlpha: 0 });
            gsap.set(textContents.slice(1), { autoAlpha: 0.3 });

            textSteps.forEach((step, index) => {
                ScrollTrigger.create({
                    trigger: step,
                    start: "top center",
                    end: "bottom center",
                    onToggle: self => {
                        if (self.isActive) {
                            gsap.to(visualItems, { autoAlpha: 0, duration: 0.3 });
                            gsap.to(visualItems[index], { autoAlpha: 1, duration: 0.3, delay: 0.1 });
                            gsap.to(textContents, { autoAlpha: 0.3, duration: 0.3 });
                            gsap.to(textContents[index], { autoAlpha: 1, duration: 0.3, delay: 0.1 });
                        }
                    }
                });
            });
        },

        // === ANIMACIÓN PARA MÓVIL (pantallas de menos de 1024px) ===
        "(max-width: 1023px)": function() {
            // No se necesita JS para el carrusel móvil, 
            // ya que es un scroll nativo del navegador.
            // Dejamos esto vacío intencionalmente.
        }
    });
});