var options = {
  series: [{
  name: 'Farine pâtissière',
  data: [44, 55, 41, 67, 22, 43, 35, 49, 51],
  color: '#fd671a'
}, {
  name: 'Farine spéciale',
  data: [13, 23, 20, 8, 13, 27, 32, 19, 42],
  color: '#FF5C0A'
}, {
  name: 'Farine boulangère',
  data: [11, 17, 15, 15, 21, 14, 29, 33, 45],
  color: '#E04B00'
}, {
  name: 'Farine boulangère super-fine',
  data: [21, 7, 25, 13, 22, 8, 17, 26, 13],
  color: '#F55200'
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
  toolbar: {
    show: true
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 10,
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
xaxis: {
  type: 'month',
  categories: ['Jan', 'Fev', 'Mar', 'Avr',
    'Mai', 'Jui', 'Juil', 'Aou', 'Sep'
  ],
},
legend: {
  position: 'right',
  offsetY: 40
},
fill: {
  opacity: 1
}
};

var chart = new ApexCharts(document.querySelector("#newChart"), options);
chart.render();

// Second chart
// var options = {
//   series: [44, 55, 13, 43, 22],
//   colors: ['#fd671a', '#FF5C0A', '#E04B00', '#F55200'],
//   chart: {
//   width: 380,
//   type: 'pie',
// },
// labels: ['2020', '2021', '2022', '2023', '2024'],
// responsive: [{
//   breakpoint: 480,
//   options: {
//     chart: {
//       width: 200
//     },
//     legend: {
//       position: 'bottom'
//     }
//   }
// }]
// };

// var chart = new ApexCharts(document.querySelector("#secondChart"), options);
// chart.render();
// second Chart
var options = {
  series: [25, 15, 44, 55, 41, 17, 33, 49, 58],
  colors: ['#fd671a', '#FF5C0A', '#E04B00', '#F55200', "#F89225", "#DA7407", "#FF8D5C", "#F89225", "#E04B00"],
  chart: {
  width: '100%',
  type: 'pie',
},
labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Juil", "Aou", "Sep"],
theme: {
  monochrome: {
    enabled: false
  }
},
plotOptions: {
  pie: {
    dataLabels: {
      offset: -5
    }
  }
},
title: {
  text: ""
},
dataLabels: {
  formatter(val, opts) {
    const name = opts.w.globals.labels[opts.seriesIndex]
    return [name, val.toFixed(1) + '%']
  }
},
legend: {
  show: false
}
};

var chart = new ApexCharts(document.querySelector("#secondChart"), options);
chart.render();