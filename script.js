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