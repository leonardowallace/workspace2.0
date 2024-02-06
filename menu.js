function toggleMenu() {
    var hiddenMenu = document.querySelector('.hidden-menu');
    var contentContainer = document.querySelector('.frame');

    hiddenMenu.classList.toggle('show-menu');
    contentContainer.classList.toggle('menu-visible', hiddenMenu.classList.contains('show-menu'));
}

