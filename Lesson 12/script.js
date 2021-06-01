document.querySelectorAll('.modal-show').forEach(function(element){
    element.onclick = showModal;
})
function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');
}

document.querySelectorAll('.modal-close').forEach(function(element){
    element.onclick = closeModal;
})
function closeModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.add('hide');
    document.querySelector(modalId).classList.add('hide');
}

document.querySelectorAll('.modal-wrap').forEach(function(element){
    element.onclick = closeModalWrap;
})
function closeModalWrap() {
    this.classList.add('hide');
    this.children[0].classList.add('hide');
}

//Пример меню на мобильной версии странички
let open = document.querySelector('.menu-btn');
function openMenu() {
    let menuId = this.dataset.menu;
    document.querySelector(menuId).parentElement.classList.remove('close');
    document.querySelector(menuId).classList.remove('close');
}
open.onclick = openMenu;

let show = document.querySelector('.menu-close');
function closeMenu() {
    let menuId = this.dataset.menu;
    document.querySelector(menuId).parentElement.classList.add('close');
    document.querySelector(menuId).classList.add('close');
}
close.onclick = closeMenu;

let hdMenu = document.querySelector('.menu');
function hideMenu() {
    this.classList.add('close');
    this.children[0].classList.add('close');
}
hdMenu.onclick = hideMenu;