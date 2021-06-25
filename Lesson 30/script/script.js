let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function showSlides(n) {
    let slides = document.querySelectorAll('.item');
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block"; 
}

//кнопки
document.querySelector('.prev').onclick = previousSlide;
document.querySelector('.next').onclick = nextSlide;

//Переключение клавишами
document.onkeydown = function(e){
    if(e.key == "ArrowLeft"){
        previousSlide();
    }
    if(e.key == "ArrowRight"){
        nextSlide();
    }
}