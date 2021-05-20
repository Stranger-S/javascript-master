function cat(){
    console.log('cat');
    cat2();
}
function cat2(){
    console.log('cat232323');
}
let push = document.querySelector('#btn');
push.onclick = cat;

let showModal = document.querySelector('#modal-show');
function show(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
    modal.style.backgroundColor = 'lightgreen';
}
showModal.onclick = show;

let hideModal = document.querySelector('#modal-hide');
function hide(){
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}
hideModal.onclick = hide;