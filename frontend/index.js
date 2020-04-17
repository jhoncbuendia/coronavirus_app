const options = {
    headers: {'authorization': 'abc'}
};

const getDataByCountry = function(country) {

    initDashboardValues();

    const request = axios.get(`http://localhost:8080/statistic/${country}`, options);
    request
        .then( (res) => {
            if(res.data.code == '422'){
                document.getElementById('statusMessage').textContent = `${res.data.message}. Try again.`;
            }
            buildDashboardByCountry(res.data.data);
        })
        .catch((error) => console.log(`Error: ${error}`));
}

const buildDashboardByCountry = function (data) {

    if(data && data.name) { setTitle(data.name) }
    
    if(data && data.latest_data){
        document.getElementById('confirmed').textContent = data.latest_data.confirmed || '-';
        document.getElementById('recovered').textContent = data.latest_data.recovered || '-';
        document.getElementById('deaths').textContent = data.latest_data.deaths || '-';
        document.getElementById('critical').textContent = data.latest_data.critical || '-';
        document.getElementById('today-confirmed').textContent = data.today.critical || '-';
        document.getElementById('today-deaths').textContent = data.today.critical || '-';
    }
    
    if(data && data.timeline) { fillChart(data.timeline) }
}

const fillChart = function(data) {
    let labels = [];
    let confirmedData = [];
    let deathsData = [];
    let recoveredData = [];

    data.map((row) => {
        labels = [...labels, row.date];
        confirmedData = [...confirmedData, row.confirmed];
        deathsData = [...deathsData, row.deaths];
        recoveredData = [...recoveredData, row.recovered];
    });

    const chartData = {
        data: {
            labels: labels.reverse(),
            datasets: [{
                label: 'Confirmed',
                data: confirmedData.reverse(),
                backgroundColor: 'rgba(63, 121, 191, 0.2)',
                borderColor: 'rgba(63, 121, 191, 1)',
                borderWidth: 1
            },{
                label: 'Deaths',
                data: deathsData.reverse(),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },{
                label: 'Recovered',
                data: recoveredData.reverse(),
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
    new Chart(chartElement, {
        type: 'line',
        data: chartData.data,
        options: chartData.options
    });
}

const initDashboardValues = () => {
    document.getElementById('statusMessage').textContent = '';
    document.getElementById('title').textContent = 'DASHBOARD';
}

const setTitle = function (title) {
    const t = document.getElementById('title').textContent;
    document.getElementById('title').textContent = t.concat(` ${title}`);
}
