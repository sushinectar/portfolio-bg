const menuButton = document.getElementById('menu-button');
const menuList = document.querySelector('.menu-list');
const collapseButton = document.querySelector('#toggleButton');

menuButton.addEventListener('click', function() {
    menuList.classList.toggle('open');
    if (menuList.classList.contains('open')) {
        collapseButton.style.top = '10.5rem';
    } else {
        collapseButton.style.top = ''; // Retorna ao valor padrão
    }
});