document.querySelector('.menu-btn').onclick = openMenu;
function openMenu() {
    let menuId = this.dataset.menu;
    document.querySelector(menuId).parentElement.classList.remove('close');
    document.querySelector(menuId).classList.remove('close');
}

document.querySelector('.menu-close').onclick = closeMenu;
function closeMenu() {
    let menuId = this.dataset.menu;
    document.querySelector(menuId).parentElement.classList.add('close');
    document.querySelector(menuId).classList.add('close');
}

/*document.querySelector('.menu').onclick = hideMenu;
function hideMenu() {
    this.classList.add('close');
    this.children[0].classList.add('close');
}*/