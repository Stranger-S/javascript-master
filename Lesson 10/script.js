let dbclick = document.querySelector('.block');
let number = 0;
dbclick.ondblclick = function() {
    console.log('dbclick');
    number = number + 1;
    document.querySelector('.number').innerHTML = "<br>" + number;
}
dbclick.onmousedown = function() {
    return false;
}

let sq = document.querySelector('.sq');
let left = 0;
let up = 0;
document.onkeydown = function(e){
    console.log(e);
    //if(e.key == "ArrowRight")
    if(e.keyCode == 39) {
        left = left + 10;
        sq.style.marginLeft = left + 'px';
    }
    if(e.key == "ArrowLeft") {
        left = left - 10;
        sq.style.marginLeft = left + 'px';
    }
    if(e.key == "ArrowUp") {
        up = up - 10;
        sq.style.marginTop = up + 'px';
    }
    if(e.key == "ArrowDown") {
        up = up + 10;
        sq.style.marginTop = up + 'px';
    }
    if(e.key == "Delete") {
        left = 0;
        up = 0;
        sq.style.marginLeft = left + 'px';
        sq.style.marginTop = up + 'px';
    }
}