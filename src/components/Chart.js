import React, { Component } from 'react';

export default class Chart extends Component {
    render() {
        return (
            <div>
                <canvas id="myChart" width="600" height="200"></canvas>
            </div>
        );
    }
}
