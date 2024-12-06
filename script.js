// Selección del botón y menú
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Agregar evento de clic al botón
dropdownBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que recargue la página
    dropdownMenu.classList.toggle('active'); // Alternar clase 'active'
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active'); // Cerrar menú
    }
});

// Seleccionar elementos
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Cerrar el menú hamburguesa si se hace clic fuera
document.addEventListener('click', (event) => {
    const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);
    if (!isClickInsideNav) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active'); // Vuelve a la forma original del botón
        dropdownMenu.classList.remove('active');
    }
});