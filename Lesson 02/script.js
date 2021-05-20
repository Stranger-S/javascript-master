let year = 1990;
let newYear = 2021;
let age = newYear - year;
console.log(age);
document.querySelector('#age').innerHTML = '<b>' + age + '</b>';
document.querySelector('#age-2').innerHTML = String(age).bold();
