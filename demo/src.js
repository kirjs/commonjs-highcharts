var Highcharts = require('../index.js');
new Highcharts.Chart({
  chart: {
    renderTo: document.body
  },
  series: [{
    type: 'pie',
    name: 'Browser share',
    data: [
      ['Firefox', 45.0],
      ['IE', 26.8],

      ['Others', 0.7]
    ]
  }]
});
