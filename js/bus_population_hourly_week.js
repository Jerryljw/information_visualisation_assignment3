var bus_spw_chartDom = document.getElementById('bus-spw');
var bus_spw_myChart = echarts.init(bus_spw_chartDom);
var bus_spw_option;

// There are three distinct peaks during the working day.
// However, the image of the weekend is a little more relaxed,
// and people prefer to spend the evening outside, especially
// on Friday and Saturday nights
bus_spw_option = {
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
      data: ['Number of Route Services', 'Population']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Number of Route Services'
      },
      {
        type: 'value',
        name: 'Population'
      }
    ],
    series: [
      {
        name: 'Number of Route Services',
        type: 'bar',
        barWidth: '40%',
        data: [32, 93, 84, 99, 104, 105, 39]
      },
      {
        name: 'Population',
        type: 'line',
        yAxisIndex: 1,
        data: [436, 530, 549, 570, 582, 641, 514]
      }
    ]
  };

if (bus_spw_option && typeof bus_spw_option === 'object') {
    bus_spw_myChart.setOption(bus_spw_option);
}
bus_spw_chartDom.style.position = 'fixed';
bus_spw_chartDom.style.height = '75%';
bus_spw_chartDom.style.width = '55%';
bus_spw_chartDom.style.marginLeft = '5%';
bus_spw_chartDom.style.marginTop = '2%';
bus_spw_chartDom.style.backgroundColor = '#fafafa4b';
bus_spw_chartDom.style.zIndex = '10';
bus_spw_chartDom.style.display = "none"