let blocks = document.querySelectorAll('.block');
//let blocks2 = document.getElementsByClassName('block');
console.log(blocks);
//console.log(blocks2);


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
