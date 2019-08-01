var seeMore = document.getElementById('watchMore');
var aditionalSection = document.querySelector('.additionalSection');
var iconMore = document.querySelector('.arrow-down');
var seeLess = document.getElementById('watchLess');
var iconLess = document.querySelector('.arrow-up');

seeMore.addEventListener('click', function() {
    aditionalSection.classList.add('show_section');
});
iconMore.addEventListener('click', function() {
    aditionalSection.classList.add('show_section');
});

seeLess.addEventListener('click', function() {
    aditionalSection.classList.remove('show_section');
});
iconLess.addEventListener('click', function() {
    aditionalSection.classList.remove('show_section');
});