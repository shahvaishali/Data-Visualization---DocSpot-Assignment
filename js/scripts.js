window.Apex = {
  chart: {
    foreColor: '#ccc',
    toolbar: {
      show: false
    },
  },
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark'
  },
  grid: {
    borderColor: "#535A6C",
    xaxis: {
      lines: {
        show: true
      }
    }
  }
};


var chartLine = new ApexCharts(
    document.querySelector('#line-adwords'), 
    optionsLine
    );
    
chartLine.render();

var chartCircle4 = new ApexCharts(document.querySelector('#radialBarBottom'), optionsCircle4);
chartCircle4.render();


var chartBar = new ApexCharts(
  document.querySelector("#barchart"),
  optionsBar2
);

chartBar.render();

