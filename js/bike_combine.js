import * as echarts from 'echarts';

import ecStat from 'echarts-stat';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.regression);
option = {
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
    text: '2009 - 2017 Annual vehicle and bicycle counts at key locations （%）',
    subtext:
      'Bicycles as a percentage of vehicles travelling into the central city during AM peak period (7am to 10am)',
    sublink: 'https://github.com/ecomfe/echarts-stat',
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
      symbolSize: 40
    },
    {
      name: 'line',
      type: 'line',
      smooth: true,
      datasetIndex: 1,
      symbolSize: 0.1,
      symbol: 'circle',
      label: { show: true, fontSize: 24 },
      labelLayout: { dx: -20 },
      encode: { label: 2, tooltip: 1 },
      lineStyle: {
        width: 5
      }
    }
  ]
};

option && myChart.setOption(option);
