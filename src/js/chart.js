var myAppDB = firebase.database();
var cars;
myAppDB.ref('cars/').on("value", function(snapshot) {
    cars = [];
    var val = snapshot.val();
    for (var car in val) {
        cars.push(val[car]);
    }
    console.log(cars);

    createBarChart(cars);

    function createBarChart(cars) {
        var ctx1 = document.getElementById('brandsChart').getContext('2d');
        var brandsChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: [`${cars[0]["brandname"]}`, `${cars[1]["brandname"]}`, `${cars[2]["brandname"]}`, `${cars[3]["brandname"]}`, `${cars[4]["brandname"]}`, `${cars[5]["brandname"]}`, `${cars[6]["brandname"]}`],
                datasets: [{
                    label: 'Количество авто',
                    data: [`${cars[0]["quantity"]}`, `${cars[1]["quantity"]}`, `${cars[2]["quantity"]}`, `${cars[3]["quantity"]}`, `${cars[4]["quantity"]}`, `${cars[5]["quantity"]}`, `${cars[6]["quantity"]}`],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)',
                        'rgb(70, 173, 29)',
                        'rgb(231, 35, 166)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)',
                        'rgb(70, 173, 29)',
                        'rgb(231, 35, 166)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: 14,
                            fontStyle: "bold",
                            fontColor: "#000"
                        }
                    }],
                    xAxes: [{
                        stacked: true,
                        ticks: {
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: 12,
                            fontStyle: "bold",
                            fontColor: "#000"
                        }
                    }],

                },
                legend: {
                    display: false,

                },
                title: {
                    display: true,
                    position: "top",
                    text: "Количество затонированных машин (по маркам):",
                    fontSize: 18,
                    fontColor: "#000",
                    padding: 20
                },
                tooltips: {
                    mode: 'index',
                    axis: 'y'
                },
                animations: {
                    animateRotate: true,
                    animateScale: true
                }

            }
        });

    }
});


myAppDB.ref('service/').on("value", function(snapshot) {
    var popularService = [];
    var values = snapshot.val();
    for (var service in values) {
        popularService.push(values[service]);
    }
    console.log(popularService);

    createDoughnutChart(popularService);

    function createDoughnutChart(popularService) {
        var ctx2 = document.getElementById('serviceChart').getContext('2d');;
        var serviceChart = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: [`${popularService[0]["servicename"]}`, `${popularService[1]["servicename"]}`, `${popularService[2]["servicename"]}`, `${popularService[3]["servicename"]}`, `${popularService[4]["servicename"]}`],
                datasets: [{
                    label: 'Объем услуг в (%)',
                    data: [`${popularService[0]["popularity"]}`, `${popularService[1]["popularity"]}`, `${popularService[2]["popularity"]}`, `${popularService[3]["popularity"]}`, `${popularService[4]["popularity"]}`],
                    backgroundColor: [
                        "#d19241",
                        "#60bb7b",
                        "#DC143C",
                        "#F4A460",
                        "#e0de37f5"
                    ],
                    borderColor: [
                        "#d19241",
                        "#60bb7b",
                        "#CB252B",
                        "#E39371",
                        "#e0de37f5"
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    position: "top",
                    text: "Популярность оказываемых услуг (%):",
                    fontSize: 18,
                    fontColor: "#111",
                    padding: 20
                },
                legend: {
                    display: true,
                    position: "bottom",

                    labels: {
                        fontColor: "#000",
                        fontSize: 12,
                        padding: 25,
                        fontStyle: "bold",
                    }
                },
                animations: {
                    animateRotate: true,
                    animateScale: true
                }
            }
        });

    }
});