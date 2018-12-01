import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import './ChartBar.css';

class ChartBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Poumon', 'Sein', 'Colorectal', 'Prostate'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            49109,
                            58968,
                            44872,
                            48427,

                        ],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                        ],
                    }
                ]
            }
        }

    }
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={200}
                    height={70}
                    options={{
                        title: {
                            display: true,
                            text: 'Les cancers les plus fréquents',
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

export default ChartBar;
