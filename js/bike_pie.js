var bike_pie_chartDom = document.getElementById('bike-pie-chart-div');
var bike_pie_myChart = echarts.init(bike_pie_chartDom);
var bike_pie_option;

bike_pie_option = {
    title: {
        text: 'How people feelings about cycling in Melbourne',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {d}%'
    },
    legend: {
        top:20,
        selectedMode:false,
        data: [
            'Very comfortable',
            'Comfortable',
            'Neither',
            'Uncomfortable',
            'Very uncomfortable',
            'Much better',
            'Better',
            'About the same',
            'Worse',
            'Much worse'
        ]
    },
    series: [
        {
            name: "People's Will",
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                position: 'inner',
                fontSize: 14
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 20, name: 'Very comfortable' },
                { value: 53, name: 'Comfortable' },
                { value: 16, name: 'Neither' },
                { value: 6, name: 'Uncomfortable' },
                { value: 5, name: 'Very uncomfortable' }
            ],
            center:['50%','60%']
        },
        {
            name: "People's Will",
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                length: 30
            },
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 22,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 14,
                        fontWeight: 'bold',
                        lineHeight: 33
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                { value: 10, name: 'Much better' },
                { value: 42, name: 'Better' },
                { value: 43, name: 'About the same' },
                { value: 4, name: 'Worse' },
                { value: 1, name: 'Much worse' }
            ],
            center:['50%','60%']
        }
    ]
};

if (bike_pie_option && typeof bike_pie_option === 'object') {
    bike_pie_myChart.setOption(bike_pie_option);
}

bike_pie_chartDom.style.position = 'fixed';
bike_pie_chartDom.style.height = '80%';
bike_pie_chartDom.style.width = '45%';
bike_pie_chartDom.style.marginLeft = '2%';
bike_pie_chartDom.style.backgroundColor = '#fafafab6';
bike_pie_chartDom.style.zIndex = '10';
bike_pie_chartDom.style.display = "none";

