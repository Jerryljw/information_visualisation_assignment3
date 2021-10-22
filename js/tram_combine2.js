var tram_combine2_chartDom = document.getElementById('tram-combine-chart-div2');
var tram_combine2_myChart = echarts.init(tram_combine2_chartDom);
var tram_combine2_option;


tram_combine2_option = {
    title: {
        text: 'Tram Departures and Population (by time slot)',
        left: 'center'
    },

    tooltip: {
        trigger: 'axis'
    },

    legend: {
        top:20,
        data: ['Population', 'Total Departures'],
        selectedMode:false
    },
    xAxis: [
        {
            type: 'category',
            data: ['6am-10am', '10am-5pm', '5pm-8pm', '8pm-1am'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Counts (million)',
            min: 0,
            max: 15,
            interval: 3,
            splitLine: {
                "show": false
            }
        },
        {
            type: 'value',
            name: 'Total Departures',
            min: 0,
            max: 150,
            interval: 30,
            splitLine: {
                "show": false
            }
        },

    ],
    series: [
        {
            name: 'Population',
            type: 'bar',
            data: [
                6.6,
                7.5,
                {
                    value: 10.1,
                    itemStyle: {
                        color: '#6A5ACD'
                    }
                }, 1.8],
        },

        {
            name: 'Total Departures',
            type: 'line',
            yAxisIndex: 1,
            data: [135, 108, 135, 60],
            lineStyle:{
                color:'#483D8B'
            },
            itemStyle : {
                normal :{ color:'#483D8B'}
            }
        }
    ]
};

tram_combine2_myChart.setOption(tram_combine2_option);
tram_combine2_chartDom.style.position = 'fixed';
tram_combine2_chartDom.style.height = '75%';
tram_combine2_chartDom.style.width = '60%';
tram_combine2_chartDom.style.marginLeft = '5%';
tram_combine2_chartDom.style.marginTop = '2%';
tram_combine2_chartDom.style.backgroundColor = '#fafafab6';
tram_combine2_chartDom.style.zIndex = '10';
tram_combine2_chartDom.style.display = "none";