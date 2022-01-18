let slideIndex = 0;

function showSlide(n) {
 let slides = document.querySelectorAll('.slider__item');
 slides = Array.from(slides);
 let nextArrow = document.querySelectorAll('.slider__arrow_next')[0];
 let prevArrow = document.querySelectorAll('.slider__arrow_prev')[0];
 let activeSlide;
 let slidesLength = slides.length - 1;

 if (n > slidesLength) {
  slideIndex = 0;
 } else if (n < 0) {
  slideIndex = slidesLength;
 }


 activeSlide = slides.find((item) => item.className.includes('slider__item_active'));

  activeSlide.classList.toggle('slider__item_active');
  activeSlide = slides[slideIndex];
  activeSlide.classList.toggle('slider__item_active');


 nextArrow.onclick = nextSlide;
 prevArrow.onclick = prevSlide;

}

function nextSlide() {
 showSlide(slideIndex += 1);
}

function prevSlide() {
 showSlide(slideIndex -= 1);
}

showSlide(slideIndex);