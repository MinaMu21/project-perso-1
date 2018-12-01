import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
import './BubbleChart.css';

class BubbleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Nord'],
                datasets: [
                    {
                        label: 'Population',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [{
                            x: 51, y: 95, r: 8
                        },
                        {
                            x: 60, y: 37, r: 5
                        },
                        {
                            x: 49, y: 81, r: 5
                        },
                        {
                            x: 92, y: 90, r: 4
                        },
                        {
                            x: 73, y: 63, r: 6
                        },
                        {
                            x: 13, y: 31, r: 5
                        },
                        {
                            x: 48, y: 78, r: 10
                        },
                        {
                            x: 96, y: 77, r: 8
                        },
                        {
                            x: 97, y: 48, r: 4
                        },
                        {
                            x: 30, y: 43, r: 9
                        }],
                    }
                ]
            }
        }
    }


    render() {
        return (
            <div className="bubble" >

                <Bubble data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Bubble chart',
                            fontSize: 30,
                        },
                        legend: {
                            display: true,
                            position: 'top',
                        }
                    }}
                />
            </div>
        );
    }
}

export default BubbleChart;