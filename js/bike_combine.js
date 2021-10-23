var bike_combine_chartDom = document.getElementById('bike-combine-chart-div');
var bike_combine_myChart = echarts.init(bike_combine_chartDom);
var bike_combine_option;
var bike_combine_app = {};

echarts.registerTransform(ecStat.transform.regression);

bike_combine_option = {
    dataset: [
        {
            source: [
                [0, 8.1],
                [1, 10.1],
                [2, 10.2],
                [3, 11.4],
                [4, 13.3],
                [5, 14.7],
                [6, 16.7],
                [7, 16.8],
                [8, 16.1]
            ]
        },
        {
            transform: {
                type: 'ecStat:regression',
                config: {
                    method: 'exponential'
                    // 'end' by default
                    // formulaOn: 'start'
                }
            }
        }
    ],
    title: {
        text: '2009 - 2017 Bicycles as a percentage of vehicles（%）',
        subtext:
            'Travelling into the central city during AM peak period (7am to 10am)',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    yAxis: {
        min: 6,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [
        {
            name: 'scatter',
            type: 'scatter',
            datasetIndex: 0,
            symbolSize: 20
        },
        {
            name: 'line',
            type: 'line',
            smooth: true,
            datasetIndex: 1,
            symbolSize: 0.1,
            symbol: 'circle',
            label: { show: true, fontSize: 15 },
            labelLayout: { dx: -20 },
            encode: { label: 2, tooltip: 1 },
            lineStyle: {
                width: 5
            }
        }
    ]
};

if (bike_combine_option && typeof bike_combine_option === 'object') {
    bike_combine_myChart.setOption(bike_combine_option);
}

bike_combine_chartDom.style.position = 'fixed';
bike_combine_chartDom.style.height = '80%';
bike_combine_chartDom.style.width = '45%';
bike_combine_chartDom.style.marginLeft = '2%';
bike_combine_chartDom.style.backgroundColor = '#fafafab6';
bike_combine_chartDom.style.zIndex = '10';
bike_combine_chartDom.style.display = "none";