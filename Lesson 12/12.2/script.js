document.querySelector('.menu-btn').onclick = openMenu;
function openMenu() {
    let menuId = this.dataset.menu;
    document.querySelector(menuId).parentElement.classList.remove('close');
    document.querySelector(menuId).classList.remove('close');
    document.onkeydown = function(p){
        if(p.key == 'Escape') {
            document.querySelector('.menu').classList.add('close');
            document.querySelector('.menu-list').classList.add('close'); 
        }
    }
}

document.querySelector('.menu-close').onclick = closeMenu;
function closeMenu() {
    let menuId = this.dataset.menu;
    document.querySelector(menuId).parentElement.classList.add('close');
    document.querySelector(menuId).classList.add('close');
}

document.onclick = function(e){
    if(e.target == document.querySelector('.menu')){
        document.querySelector('.menu').classList.add('close');
        document.querySelector('.menu-list').classList.add('close');
    }
}

/*document.addEventListener('click', function(event){
    let menu = document.querySelector('.menu');
    console.log(event.target);
    if(event.target == menu){
        document.querySelector('.menu').classList.add('close');
        document.querySelector('.menu-list').classList.add('close');
    }
})*/

//----------Изначальный вариант----------------
/*document.querySelector('.menu').onclick = hideMenu;
function hideMenu() {
    this.classList.add('close');
    this.children[0].classList.add('close');
}*/