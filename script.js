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

document.addEventListener('DOMContentLoaded', function() {
    // ... (tu código para el menú, asegúrate que funcione primero) ...

    const heroText = document.getElementById('heroText');

    if (heroText) {
        // Forzar un reflujo/repintado (a veces útil para transiciones on-load)
        void heroText.offsetWidth; 

        // Quita las clases del estado inicial para activar la animación
        heroText.classList.remove('opacity-0', 'translate-y-5');
        // Al quitar estas clases, el elemento transicionará a su estado natural:
        // opacity: 1 (o el valor por defecto de la clase 'text-white')
        // transform: translateY(0) (su posición original)
        // Esto sucede gracias a las clases 'transition-all', 'duration-*', 'ease-*', 'delay-*'
    }

    // ... (código para el scroll del header, año en el footer, etc.) ...
});