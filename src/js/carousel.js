(function() {
    'use strict';
    let slideIndex = 0;
    showSlides(slideIndex);
    let dotContainer = document.getElementById('dot-container');
    dotContainer.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.dataset.key) {
            showSlides((event.target.dataset.key) - 1);
        }
    });

    let nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', function(event) {
        event.preventDefault();
        showSlides(slideIndex + 1);
    });

    let previousButton = document.getElementById('previous-button');
    previousButton.addEventListener('click', function(event) {
        event.preventDefault();
        showSlides(slideIndex - 1);
    });

    function showSlides(n) {
        slideIndex = n;
        let slides = document.getElementsByClassName("slideCollection");
        let dots = document.getElementsByClassName("dot");

        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        slides[slideIndex].style.display = "block";
        dots[slideIndex].classList.add("active");
    }

}());