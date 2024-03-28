import { category } from "../data/category.js"; 

// Extract the required data from your JSON
const types = category[0].type;
const percentages = category[0].percentage;

// Define the chart configuration using the extracted data
const options = {
  series: [{
    data: percentages
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true
  },
  xaxis: {
    categories: types,
  },
  yaxis: {
    categories: percentages,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "Percentage: " + val + "%";
      }
    }
  }
};

// Create and render the chart
const chart = new ApexCharts(document.querySelector(".js-chart"), options);
chart.render();
