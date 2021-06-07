function chips(message, timeRemove = 3000){
    let chips = document.createElement('div');
    chips.classList.add('chips');
    chips.innerHTML = message;
    addChips(chips);
    setTimeout(function(){deleteChips(chips)},timeRemove);
    if(check.checked){
        if(input.value == 0){
            chips.classList.add('wrong');
        }else{
            chips.classList.add('succes');
        }
    }
}

function addChips(chips){
    let chipsField = document.querySelector('.chips-field');
    if(chipsField){
        chipsField.appendChild(chips);
    }else{
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    }
}

function deleteChips(chips){
    chips.remove();
    let allChips = document.querySelectorAll('.chips-field .chips');
    if(allChips.length == 0) document.querySelector('.chips-field').remove();
}
let check = document.querySelector('.checkbox');
let input = document.querySelector('.text');
document.querySelector('button').onclick = function(){
    chips('hello', 5000)
}