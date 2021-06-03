let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');
sendForm.onclick = function(event){
    event.preventDefault();
    console.log('yes');
    console.log(serialize(form));
}