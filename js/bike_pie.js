var bike_pie_chartDom = document.getElementById('bike-pie-chart-div');
var bike_pie_myChart = echarts.init(bike_pie_chartDom);
var bike_pie_option;

var bike_pie_datas = [
    ////////////////////////////////////////
    [
        { value: 22, name: 'Very comfortable' },
        { value: 53, name: 'Comfortable' },
        { value: 16, name: 'Neither' },
        { value: 6, name: 'Uncomfortable' },
        { value: 5, name: 'Very uncomfortable' }
    ],
    // ////////////////////////////////////////
    [
        { value: 22, name: 'Much better' },
        { value: 53, name: 'Better' },
        { value: 16, name: 'About the same' },
        { value: 6, name: 'Worse' },
        { value: 5, name: 'Much worse' }
    ],
];
bike_pie_option = {
    title: {
        text: 'Rider Comfort & Condition Rating',
        left: 'center',
        textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 14
        }
    },
    series: bike_pie_datas.map(function (data, idx) {
        var bike_pie_top = idx * 33.3;
        return {
            type: 'pie',
            radius: [20, 60],
            bike_pie_top: bike_pie_top + '%',
            height: '33.33%',
            left: 'center',
            width: 400,
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            label: {
                alignTo: 'edge',
                formatter: '{name|{b}}\n{time|{c} %}',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 15,
                rich: {
                    time: {
                        fontSize: 10,
                        color: '#999'
                    }
                }
            },
            labelLine: {
                length: 15,
                length2: 0,
                maxSurfaceAngle: 80
            },
            labelLayout: function (params) {
                const bike_pie_isLeft = params.labelRect.x < bike_pie_myChart.getWidth() / 2;
                const bike_pie_points = params.labelLinePoints;
                // Update the end point.
                bike_pie_points[2][0] = bike_pie_isLeft
                    ? params.labelRect.x
                    : params.labelRect.x + params.labelRect.width;
                return {
                    labelLinePoints: bike_pie_points
                };
            },
            data: data
        };
    })
};

if (bike_pie_option && typeof bike_pie_option === 'object') {
    bike_pie_myChart.setOption(bike_pie_option);
}

bike_pie_chartDom.style.position = 'fixed';
bike_pie_chartDom.style.height = '80%';
bike_pie_chartDom.style.width = '36%';
bike_pie_chartDom.style.marginLeft = '2%';
bike_pie_chartDom.style.backgroundColor = '#fafafab6';
bike_pie_chartDom.style.zIndex = '10';
bike_pie_chartDom.style.display = "none"
