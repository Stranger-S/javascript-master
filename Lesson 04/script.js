let hour = prompt('Которое сейчас время(сколько часов)?','');

if (hour >= 6 && hour < 12) {
    document.querySelector('#hello').innerHTML = 'Доброе утро';
}else if (hour >= 12 && hour < 18) {
    document.querySelector('#hello').innerHTML = 'Добрый день';
}else if (hour >= 18 && hour < 24 || hour >= 0 && hour < 6) {
    document.querySelector('#hello').innerHTML = 'Доброй ночи';
}
else {
    document.querySelector('#hello').innerHTML = 'Неверное время';
}