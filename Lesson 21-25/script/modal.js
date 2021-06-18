document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {
        "format" : "dd.mm.yyyy",
    });
});
//откритие кнопокой
document.querySelectorAll('.button-show').forEach(function(el){
    el.onclick = showModal;
})
function showModal(){
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('close');
    document.querySelector(modalId).parentElement.classList.remove('close');
    //закритие клавишей Escape
    document.onkeydown = function(p){
        if(p.key == 'Escape') {
            document.querySelector(modalId).classList.add('close');
            document.querySelector(modalId).parentElement.classList.add('close'); 
        }
    }
}
//закритие кнопкой
document.querySelectorAll('.modal-close').forEach(function(element){
    element.onclick = closeModal;
})
function closeModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.add('close');
    document.querySelector(modalId).classList.add('close');
}
//закритие по клику вне окна
document.querySelectorAll('.modal-back').forEach(function(element){
    element.onclick = function(e) {
        if(e.target == element) {
            this.classList.add('close');
            this.children[0].classList.add('close');
        }
    }
});
//слайдер
document.querySelector('.rules').onclick = function(){
    document.querySelector('.slider-window').style.marginLeft = "-400px";
}
document.querySelectorAll('.rules-back').forEach(function(element){
    element.onclick = function(){
        document.querySelector('.slider-window').style.marginLeft = "0";
    }
})
//состояние кнопки регистрация
document.querySelector('#rules-check').onclick = function() {
    document.querySelector('#signup-submit').toggleAttribute('disabled');
}
