var myAppDB = firebase.database();
var cloud = document.querySelector('#cloud');
var movingArea = document.querySelector('.car_wraper');
var carButton = document.querySelector('.car-button');

myAppDB.ref('Progress/').on("value", function(snapshot) {
    var awards = [];
    var values = snapshot.val();
    for (var award in values) {
        awards.push(values[award]);
    }

    function movingCar([first, ...rest]) {
        if (!first) {
            movingArea.classList.remove('animation');
            return;
        }
        cloud.innerHTML = `<span class="textCloud">${first}</span>`;
        setTimeout(function() { movingCar(rest) }, 3000);
    }

    function removeClass() {
        movingArea.classList.remove('animation');
    }

    carButton.addEventListener('click', function() {
        if (movingArea.classList.contains('animation')) {
            movingArea.classList.remove('animation');
        } else {
            movingCar(awards);
            movingArea.classList.add('animation');
        }





    });
})