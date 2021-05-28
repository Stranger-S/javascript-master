let blocks = document.querySelectorAll('.block');
//let blocks = document.getElementsByClassName('block');
console.log(blocks);

for (let i = 0; i < blocks.length; i++){
    blocks[i].onclick = function (){
        //console.log('work');
        //this.style.background = 'lightblue';
    }
}

blocks.forEach(element => {
    element.onclick = function (){
        console.log('work');
        this.style.background = 'lightgreen';  
    }
});
