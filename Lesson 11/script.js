
let toggleModal = document.querySelector('#btn');
let modal = document.querySelector('.modal');
toggleModal.onclick = function() {
    modal.classList.toggle('modal-show');
}

let block = document.querySelector('.block');
block.classList.add('green');
block.classList.add('blue');

block.classList.remove('blue');
