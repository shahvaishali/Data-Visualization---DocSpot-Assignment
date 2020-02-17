dates = {}
fruits = {}
for (var i = 0; i< fruitSales.length; i++){
	var d = new Date(fruitSales[i]['date'])
	d = d.toLocaleDateString()
	if (!(d in dates)){
		dates[d] = {}
	}
	var fruit = fruitSales[i]['store']
	if (!(fruit in dates[d])){
		dates[d][fruit] = 0
	}

	dates[d][fruit] = Math.round(((fruitSales[i]['units']*fruitSales[i]['price'] + dates[d][fruit])*100))/100

	if (!(fruit in fruits)){
		fruits[fruit] = []
	}
}

for (var i in dates){
	for (var j in fruits){
		if (j in dates[i]){
			fruits[j].push({'x':i, 'y': dates[i][j]}) 
		}
	}
}

seriesChart = []
for (var i in fruits){
	seriesChart.push({'name':i, 'data':fruits[i]})
}

var optionsLine = {
  chart: {
    height: 328,
    type: 'line',
    zoom: {
      enabled: false
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  //colors: ["#3F51B5", '#2196F3'],
  series: seriesChart,
  title: {
    text: 'Food sold over time',
    align: 'center',
  },
  markers: {
    size: 6,
    strokeWidth: 0,
    hover: {
      size: 9
    }
  },
  grid: {
    show: true,
    padding: {
      bottom: 0
    }
  },
  xaxis: {
    title : {
        text: 'Time', 
        type: "datetime"
    }
  },
  title: {
        text: 'Store Sales over time',
        align: 'center'
    },
  legend: {
    position: 'bottom',
    horizontalAlign: 'right'
  },
    yaxis: {
        title: {
            text: 'Total Sales ($)'
        }
    }
}

var optionsLine = {
    chart: {
        height: 380,
        width: "100%",
        type: "line",
        animations: {
            initialAnimation: {
                enabled: false
            }
        }   
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
            size: 9
        }
    },
    series: seriesChart,
    xaxis: {
        text: 'Time', 
        type: "datetime"
    },
    title: {
        text: 'Store Sales over time',
        align: 'center'
    },
    legend: {
        position: 'bottom',
    },
    yaxis: {
        title: {
        text: 'Total Sales ($)'
        }
    }
};