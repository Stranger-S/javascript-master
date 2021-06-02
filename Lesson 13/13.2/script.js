function init(){
    let tabBody = document.querySelectorAll('.tab-body');
    for(let i = 1; i < tabBody.length; i++){
        tabBody[i].style.display = "none";
    }
}
init()

let tab = document.querySelectorAll('.tab');
tab.forEach(function(element){
    element.onclick = showTabs;
})
function showTabs(){
    let data = this.getAttribute('data');
    
    let tabBody = document.querySelectorAll('.tab-body');
    tabBody.forEach(function(element){
        element.style.display = "none";
    })
    /*for(let i = 0; i < tabBody.length; i++){
        tabBody[i].style.display = "none";
    }*/
    //document.querySelector('.tab-body[data="'+data+'"]').style.display = "block";
    document.querySelector(`.tab-body[data="${data}"]`).style.display = "block";

    //присвоение класса active выбраному табу
    let tab = document.querySelectorAll('.tab');
    tab.forEach(function(element){
        element.classList.remove('active');
    })
    document.querySelector(`.tab[data="${data}"]`).classList.add('active');
}