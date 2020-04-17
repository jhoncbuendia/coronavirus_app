const options = {
    headers: {'authorization': 'abc'}
  };

const getCoronaDatos = axios.get('http://localhost:8080/statistic/co', options);
getCoronaDatos.then( (r) => {
    console.log(r);
});

const chartData = {
    data: {
        labels: ['2020-04-10', '2020-04-11', '2020-04-12', '2020-04-13', '2020-04-14', '2020-04-15'],
        datasets: [{
            label: 'Confirmados',
            data: [2473, 2709, 2776, 2852, 2979, 3105],
            backgroundColor: 'rgba(63, 121, 191, 0.2)',
            borderColor: 'rgba(63, 121, 191, 1)',
            borderWidth: 1
        },{
            label: 'Muertes',
            data: [80, 100, 109, 112, 127, 131],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },{
            label: 'Recuperados',
            data: [197, 214, 270, 319, 354, 452],
            backgroundColor: 'rgba(63, 191, 70, 0.2)',
            borderColor: 'rgba(63, 191, 70, 1)',
            borderWidth: 1
        }
    ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

const chartElement = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(chartElement, {
    type: 'line',
    data: chartData.data,
    options: chartData.options
});