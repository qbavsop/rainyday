import React from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import './Forecast.css';
import 'chartjs-plugin-datalabels';

let config = {};
let myChart = null;
let options = {
  responsive: true,
  scales: {
    xAxes: {
      gridLines: {
        drawOnChartArea: false,
        color: "rgba(255,255,255,.05)"
      }
    },
    yAxes: [
      {
        type: "linear",
        ticks: {
          suggestedMin: -20,
          suggestedMax: 40
        },
        id: "y-axis-2",
        display: true,
        position: "right",
        gridLines: {
          zeroLineColor: "rgba(255,255,255,.3)",
          color: "rgba(255,255,255,.05)"
        }
      }, {
        type: "linear",
        ticks: {
          min: 0,
          suggestedMax: 5
        },
        id: "y-axis-1",
        display: true,
        position: "left",
        gridLines: {
          drawOnChartArea: false,
          color: "rgba(255,255,255,.05)"
        }
      }, {
        type: "linear",
        ticks: {
          min: 0,
          suggestedMax: 5
        },
        id: "y-axis-3",
        display: false,
        position: "left",
        gridLines: {
          drawOnChartArea: false
        }
      }
    ]
  },
  tooltips: {
    enabled: false
  },
  plugins: {
    datalabels: {
      display: true,
      color: 'white',
      backgroundColor: function(context) {
        return context.dataset.backgroundColor;
      },
      borderRadius: 5,
      font: {
        weight: 'bold'
      },
      formatter: Math.round
    }
  },
  animations: {
    duration: 2000,
    easing: 'easeInOutQuint'
  },
  legend: {
    labels: {
      boxWidth: 15
    }
  }
};

class Forecast extends React.Component {
  state = {
    dataSnow: this.props.forecast.dataSnow,
    dataTemp: this.props.forecast.dataTemp,
    dataTime: this.props.forecast.dataTime,
    dataRain: this.props.forecast.dataRain
  }

  static propTypes = {
    forecast: PropTypes.shape({
      dataRain: PropTypes.array,
      dataSnow: PropTypes.array,
      dataTemp: PropTypes.array,
      dataTime: PropTypes.array
    })
  }

  printGraph = () => {
    config = {
      datasets: [
        {
          type: 'line',
          label: 'Temperature',
          fill: false,
          data: this.state.dataTemp,
          backgroundColor: 'rgba(25,225,25,1)',
          borderColor: 'rgba(25,225,25,1)',
          yAxisID: "y-axis-2",
          datalabels: {
            align: 'end',
            offset: 10
          }
        }, {
          type: 'bar',
          label: 'Rain',
          data: this.state.dataRain,
          backgroundColor: 'rgba(255,255,255, 0.1)',
          borderColor: 'rgba(255,255,255, 0.1)',
          yAxisID: "y-axis-1",
          datalabels: {
            display: false
          }
        }, {
          type: 'bar',
          label: 'Snow',
          data: this.state.dataSnow,
          backgroundColor: 'rgba(190,217,252, 0.7)',
          borderColor: 'rgba(190,217,252, 0.7)',
          yAxisID: "y-axis-3",
          datalabels: {
            display: false
          }
        }
      ],
      labels: this.state.dataTime
    };
    let ctx = "myChart";
    if (myChart !== null) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: 'bar',
      data: config,
      options: options
    });
  }

  componentDidMount() {
    // console.log("Initial render");
    this.printGraph();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.forecast.dataTime !== nextProps.forecast.dataTime) {
      console.log("updating state...");
      this.setState({dataTemp: nextProps.forecast.dataTemp, dataTime: nextProps.forecast.dataTime, dataRain: nextProps.forecast.dataRain, dataSnow: nextProps.forecast.dataSnow})
    }
  }

  componentDidUpdate() {
    //console.log("redraw & print");
    this.printGraph();

  }

  render() {

    return (
      <div className="forecast">
        <canvas id="myChart" width="600" height="450"></canvas>
      </div>
    )
  }
}
export default Forecast;
