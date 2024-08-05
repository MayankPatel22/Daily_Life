const slides = document.querySelectorAll(".slider img");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); // Corrected to remove class from each 'slide'
    });

    if (index >= slides.length) { // Loop back to first slide if out of bounds
        slideIndex = 0;
    } else if (index < 0) { // Loop to last slide if negative index
        slideIndex = slides.length - 1;
    }

    slides[slideIndex].classList.add("displaySlide"); // Apply class to the correct slide
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}