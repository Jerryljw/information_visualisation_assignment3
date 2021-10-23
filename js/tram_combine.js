var tram_combine_chartDom = document.getElementById('tram-combine-chart-div');
var tram_combine_myChart = echarts.init(tram_combine_chartDom);
var tram_combine_option;


tram_combine_option = {
    title: {
        text: 'Number of Tram Departures and Population',
        left: 'center',
        
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        data: ['Population', 'Total Departures'],
        selectedMode: false,
        top: 20,
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Population',
            min: 0,
            max: 120,
            interval: 30,
            axisLabel: {
                formatter: '{value} million'
            }
        },
        {
            type: 'value',
            name: 'Total Departures',
            min: 0,
            max: 120,
            interval: 30
        }
    ],
    series: [
        {
            name: 'Population',
            type: 'bar',
            data: [
                92,
                94,
                96,
                100,
                {
                    value: 111,
                    itemStyle: {
                        color: '#6A5ACD'
                    }
                }, 83, 71],
        },
        {
            name: 'Total Departures',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
                color: '#483D8B'
            },
            itemStyle: {
                normal: {color: '#483D8B'}
            },
            data: [115, 115, 115, 115, 115, 77, 60]
        }
    ]
};


tram_combine_myChart.setOption(tram_combine_option);

tram_combine_chartDom.style.position = 'fixed';
tram_combine_chartDom.style.height = '75%';
tram_combine_chartDom.style.width = '60%';
tram_combine_chartDom.style.marginLeft = '5%';
tram_combine_chartDom.style.marginTop = '2%';
tram_combine_chartDom.style.backgroundColor = '#fafafab6';
tram_combine_chartDom.style.zIndex = '10';
tram_combine_chartDom.style.display = "none";