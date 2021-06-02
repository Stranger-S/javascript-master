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