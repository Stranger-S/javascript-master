for ( let i = 4; i <= 400; i++) {
    document.querySelector('#task1').innerHTML += i + " ";
}

for ( let j = 4; j <= 10; j = j + 2){
    document.querySelector('#task2').innerHTML += j + " ";
}

for ( let k = 645; k >= 0; k = k - 1){
    document.querySelector('#task3').innerHTML += k + " ";
}

for ( let l = -4; l <= 100; l = l + 2){
    document.querySelector('#task4').innerHTML += l + " ";
}

for ( let i = 1; i <= 9; i++){
    let j = 6;
    document.querySelector('#task5').innerHTML += j + " * " + i + " = " + i*j + "<br>"; 
}