// Gets each stores sales

stores = {}
for (var i = 0; i < fruitSales.length; i++){
	var store = fruitSales[i]['store']
	if (!(store in stores)){
		stores[store] = 0
	}
	stores[store] =  Math.round(((fruitSales[i]['units']*fruitSales[i]['price'] + stores[store])*100))/100
}

// Format data as per Apex radialBar
var storeSale = []
var storeLabel = []

for (var i in stores){
    storeLabel.push(i)
    storeSale.push(stores[i])
}


var optionsCircle4 = {
    chart: {
    type: 'radialBar',
    },
    plotOptions: {
    radialBar: {
      size: undefined,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',

      },
      track: {
        show: false,
      },
      startAngle: 0,
      endAngle: 360,
      
      dataLabels: {
          show: true,
          name: {
              show: true,
              fontSize: '22px',
              fontFamily: undefined,
              color: undefined,
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: undefined,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return '$ ' + val
              }
            },
            total: {
              show: false,
              label: 'Total',
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0) / w.globals.series.length
              }
            }
      }

    },
  },
  stroke: {
    lineCap: 'round'
  },
  series: storeSale,
  labels: storeLabel,
  legend: {
    show: true,
    floating: true,
    position: 'bottom'
    },
    title: {
        text: 'Total Store Sales',
        align: 'center'
    },
}