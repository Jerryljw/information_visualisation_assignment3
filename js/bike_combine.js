var bike_combine_chartDom = document.getElementById('bike-combine-chart-div');
var bike_combine_myChart = echarts.init(bike_combine_chartDom);
var bike_combine_option;
var bike_combine_app = {};
const bike_combine_posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
];
bike_combine_app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: bike_combine_posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};
bike_combine_app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        const bike_combine_labelOption = {
            rotate: bike_combine_app.config.rotate,
            align: bike_combine_app.config.align,
            verticalAlign: bike_combine_app.config.verticalAlign,
            position: bike_combine_app.config.position,
            distance: bike_combine_app.config.distance
        };
        myChart.setOption({
            series: [
                {
                    label: bike_combine_labelOption
                },
                {
                    label: bike_combine_labelOption
                },
                {
                    label: bike_combine_labelOption
                },
                {
                    label: bike_combine_labelOption
                }
            ]
        });
    }
};
const bike_combine_labelOption = {
    show: true,
    position: bike_combine_app.config.position,
    distance: bike_combine_app.config.distance,
    align: bike_combine_app.config.align,
    verticalAlign: bike_combine_app.config.verticalAlign,
    rotate: bike_combine_app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {}
    }
};
bike_combine_option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        selectedMode:false,
        data: ['Swanston', 'Albert', 'Footscray', 'Flinders', 'Canning', 'Yarra North', 'Yarra South']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: ['Swanston', 'Albert', 'Footscray', 'Flinders', 'Canning', 'Yarra North', 'Yarra South']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '2008',
            type: 'bar',
            barGap: 0,
            label: bike_combine_labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [414, 182, 768, 982, 690, 1108, 398]
        },
        {
            name: '2012',
            type: 'bar',
            label: bike_combine_labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [758, 890, 1247, 1359, 977, 898, 653]
        },
        {
            name: '2013',
            type: 'bar',
            label: bike_combine_labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [1235, 843, 1093, 1864, 1213, 1093, 899]
        }
    ]
};

if (bike_combine_option && typeof bike_combine_option === 'object') {
    bike_combine_myChart.setOption(bike_combine_option);
}

bike_combine_chartDom.style.position = 'fixed';
bike_combine_chartDom.style.height = '80%';
bike_combine_chartDom.style.width = '36%';
bike_combine_chartDom.style.marginLeft = '2%';
bike_combine_chartDom.style.backgroundColor = '#fafafab6';
bike_combine_chartDom.style.zIndex = '10';
bike_combine_chartDom.style.display = "none";