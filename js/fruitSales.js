// Get available months like [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var availMonths = new Array(12).fill(0)
for (var i = 0; i < fruitSales.length; i++){
	var x = new Date(fruitSales[i]["date"])
	var month = x.getMonth()
    availMonths[month] = 1
}

// List available months in dict like {'June': 0, 'August':1}
var finalMonths = {}
var numOfMonths = 0
for (var j = 0; j < 12; j ++){
	if (availMonths[j] === 1){
		finalMonths[months[j]] = numOfMonths
		numOfMonths++
    }
}


// Gets each fruits sales by month like {'Banana': [20, 34, 0, 1], 'Lemon': [10, 23, 15, 0]}

fruits = {}
for (var i = 0; i < fruitSales.length; i++){
	var fruit = fruitSales[i]['item']
	var x = new Date(fruitSales[i]["date"])
	var month = months[x.getMonth()]
	if (!(fruit in fruits)){
		fruits[fruit] = new Array(numOfMonths).fill(0)
	}
	fruits[fruit][finalMonths[month]] = Math.round(((fruitSales[i]['units']*fruitSales[i]['price'] + fruits[fruit][finalMonths[month]])*100))/100
}

// Format data as per Apex
yData = []
var k = 0
for (var i in fruits){
	yData[k] = {'name': i, 'data': fruits[i]}
	k++;
}


var optionsBar2 = {
    chart: {
        height: 380,
        type: 'bar',
        stacked: true,
    },
    plotOptions: {
        bar: {
          columnWidth: '30%',
          horizontal: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: yData,
    colors: ['rgba(0,143,251,1)', 'rgba(0,227,150,1)', 'rgba(254,176,25,1)', 'rgba(255,69,96,1)', 'rgba(119,93,208,1)', 'rgba(255,10,251,1)', 'rgba(145,100,0,1)', 'rgba(255,255,255,1)'],
    title: {
        text: 'Fruits Sale / Month',
        align: 'center'
    },
    xaxis: {
        categories: Object.keys(finalMonths),
        title : {
            text: 'Months'
        }
    },
    yaxis: {
        title: {
            text: 'Total Sales ($)'
        }
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val 
            }
        }
    },
}