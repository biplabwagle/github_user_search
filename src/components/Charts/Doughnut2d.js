// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'doughnut2D', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Stars Per Language',
        theme: 'candy',
        decimals: 0,
        doughnutRadius: '45%',
        showPercentValues: 0,
        paletteColors:
          '#f0db4f, #c023fd, #ff567d, #cc76fd, #cfde34, #1ffdce, #aceda1, #f93421, #12f349, #19cefa',
      },
      // Chart Data
      data: data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class Doughnut2D extends React.Component {
  constructor({ data }) {
    super();
    this.data = data;
  }
  render() {
    return <ChartComponent data={this.data} />;
  }
}

export default Doughnut2D;
