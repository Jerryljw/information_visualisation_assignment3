var bus_phw_chartDom = document.getElementById('bus-phw');
var bus_phw_myChart = echarts.init(bus_phw_chartDom);
var bus_phw_option;

// There are three distinct peaks during the working day.
// However, the image of the weekend is a little more relaxed,
// and people prefer to spend the evening outside, especially
// on Friday and Saturday nights
bus_phw_option = {
  title: {
    text: 'Hourly Footfall in Melbourne City',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    
    data: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    top: 28
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
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
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Monday',
      type: 'line',
      data: [
        115, 42, 26, 21, 21, 47, 151, 422, 894, 635, 592, 708, 1117, 1164, 932,
        922, 1044, 1316, 890, 561, 431, 342, 233, 133
      ]
    },
    {
      name: 'Tuesday',
      type: 'line',
      data: [
        104, 32, 20, 16, 18, 49, 175, 473, 968, 666, 589, 703, 1129, 1176, 925,
        920, 1063, 1368, 952, 606, 464, 376, 264, 153
      ]
    },
    {
      name: 'Wednesday',
      type: 'line',
      data: [
        122, 36, 22, 17, 18, 50, 178, 475, 971, 677, 607, 736, 1166, 1198, 948,
        954, 1094, 1406, 1004, 663, 499, 407, 305, 171
      ]
    },
    {
      name: 'Thursday',
      type: 'line',
      data: [
        129, 39, 23, 18, 18, 50, 178, 473, 969, 691, 614, 733, 1160, 1211, 966,
        959, 1100, 1415, 1031, 692, 539, 450, 347, 210
      ]
    },
    {
      name: 'Friday',
      type: 'line',
      data: [
        154, 58, 38, 30, 26, 52, 167, 435, 905, 672, 630, 767, 1197, 1246, 1019,
        1029, 1178, 1445, 1158, 896, 714, 636, 575, 406
      ]
    },
    {
      name: 'Saturday',
      type: 'line',
      lineStyle: { width: 4 },
      data: [
        258, 146, 94, 69, 43, 41, 60, 109, 200, 348, 534, 727, 901, 1007, 1014,
        1027, 1013, 948, 855, 760, 636, 582, 576, 426
      ]
    },
    {
      name: 'Sunday',
      type: 'line',
      lineStyle: { width: 4 },
      data: [
        288, 188, 130, 102, 61, 47, 55, 94, 173, 311, 513, 700, 870, 955, 985,
        964, 893, 775, 646, 528, 433, 350, 255, 158
      ],
      markArea: {
        itemStyle: {
          color: 'rgba(255, 173, 177, 0.2)'
        },
        data: [
          [
            {
              xAxis: '8:00'
            },
            {
              xAxis: '10:00'
            }
          ],
          [
            {
              xAxis: '12:00'
            },
            {
              xAxis: '13:00'
            }
          ],
          [
            {
              xAxis: '16:00'
            },
            {
              xAxis: '18:00'
            }
          ]
        ]
      }
    }
  ]
};

if (bus_phw_option && typeof bus_phw_option === 'object') {
  bus_phw_myChart.setOption(bus_phw_option);
}
bus_phw_chartDom.style.position = 'fixed';
bus_phw_chartDom.style.height = '75%';
bus_phw_chartDom.style.width = '65%';
bus_phw_chartDom.style.marginLeft = '5%';
bus_phw_chartDom.style.marginTop = '2%';
bus_phw_chartDom.style.backgroundColor = '#fafafa4b';
bus_phw_chartDom.style.zIndex = '10';
bus_phw_chartDom.style.display = "none";