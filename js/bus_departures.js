var bus_departures_chartDom = document.getElementById('bus-departures');
var bus_departures_myChart = echarts.init(bus_departures_chartDom);
var bus_departures_option;

// The bar chart shows how many buses (including night buses, etc.)
// start their first trip in each hour.
// Most of the buses are proportional to the number of people, but
// it seems that we can slightly reduce the number of buses from 9am to 11am.
bus_departures_option = {
  color: ['#EE8434', '#F0D656'],
  title: {
    text: 'Number of Bus Departures & Population',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    selectedMode:false,
    top: 23,
    data: [
      'Number of Departures',
      'Weekdays (Population)',
      'Weekends (Population)'
    ]
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '0:00',
        '1:00',
        '2:00',
        '3:00',
        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
      ],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Number of Departures'
    },
    {
      type: 'value',
      name: 'Population'
    }
  ],
  series: [
    {
      name: 'Number of Departures',
      type: 'bar',
      barWidth: '40%',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color: '#61a0a8'
        },
        {
          offset: 1,
          color: '#ffff'
        }
      ]),
      data: [
        428, 27, 52, 91, 238, 857, 1607, 2366, 2625, 2652, 2680, 2688, 2674,
        2610, 2669, 2751, 2876, 2815, 2413, 1909, 1570, 1236, 809, 1009
      ]
    },
    {
      name: 'Weekdays (Population)',
      type: 'line',
      yAxisIndex: 1,
      data: [
        125, 108, 71, 54, 41, 67, 193, 496, 1016, 800, 816, 1015, 1508, 1591,
        1358, 1355, 1477, 1735, 1307, 941, 743, 628, 511, 331
      ]
    },
    {
      name: 'Weekends (Population)',
      type: 'line',
      yAxisIndex: 1,
      data: [
        273, 167, 112, 85, 52, 44, 57, 102, 187, 330, 523, 714, 885, 981, 999,
        996, 953, 861, 751, 644, 534, 466, 415, 292
      ]
    }
  ]
};


bus_departures_myChart.setOption(bus_departures_option);

bus_departures_chartDom.style.position = 'fixed';
bus_departures_chartDom.style.height = '75%';
bus_departures_chartDom.style.width = '60%';
bus_departures_chartDom.style.marginLeft = '5%';
bus_departures_chartDom.style.marginTop = '2%';
bus_departures_chartDom.style.backgroundColor = '#fafafab6';
bus_departures_chartDom.style.zIndex = '10';
bus_departures_chartDom.style.display = "none";