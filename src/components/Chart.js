import React, { Component } from 'react';

export default class Chart extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <canvas id="myChart" width="200" height="50"></canvas>
                    </div>
                </div>
            </div>
        );
    }
}
