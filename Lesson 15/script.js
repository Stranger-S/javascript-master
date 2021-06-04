function f1(){
    let div = document.querySelector('#one');
    div.innerHTML += " Hello!";
}
f1();

function f2(){
    d.innerHTML += " Hi!"
}
let d = document.querySelector('#two');
f2();
d = document.querySelector('#three');
f2();

function f4(id) {
    let c = document.querySelector(id);
    c.innerHTML += " It's work!";
}
f4('#four');
f4('#one');

function style(size, color){
    document.querySelector('#five').style.fontSize = size;
    document.querySelector('#five').style.color = color;
}
style('20px', 'green');
