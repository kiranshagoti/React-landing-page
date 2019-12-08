import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    datasets: [
        {
            backgroundColor: '#00b200',
            borderColor: '#00b200',
            borderWidth: 1,
            hoverBackgroundColor: '#006600',
            hoverBorderColor: '#006600',
            data: [55000000, 45000000, 20000000, 30000000, 15000000, 60000000, 50000000]
        },
        {
            backgroundColor: '#ff0000',
            borderColor: 'ff0000',
            borderWidth: 1,
            hoverBackgroundColor: '#990000',
            hoverBorderColor: '#990000',
            data: [15000000, 35000000, 45000000, 35000000, 20000000, 37500000, 2500000]
        }
    ]
};
export default class Chart extends Component {
    render() {
        return (
            /*   <div className="myChartArrangement">
        <canvas id="myChart" width="200" height="50"></canvas>
      </div> */
            <div>
                <h5 style={{ float: 'left', margin: '0px 0px 20px 200px', color: '#8f9db4' }}>
                    Aggregated transactions
                </h5>
                <div className="BarArrangement">
                    <Bar
                        data={data}
                        width={600}
                        height={300}
                        options={{
                            responsive: false,
                            legend: {
                                display: false
                            },
                            tooltips: {
                                callbacks: {
                                    label: function(tooltipItem) {
                                        return tooltipItem.yLabel;
                                    }
                                }
                            },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            stepSize: 10000000,
                                            max: 70000000,
                                            min: 0
                                        }
                                    }
                                ]
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}
