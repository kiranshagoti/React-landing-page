import React, { Component } from 'react';

export default class Cards extends Component {
    render() {
        return (
            <div className="cardsArrangement">
                <div className="card color-ACB">
                    <h5 className="card-title">Aggregated account balance</h5>
                    <p>1.314.395.760</p>
                </div>

                <div className="card color-LT1">
                    <h5 className="card-title">Last Trade</h5>
                </div>

                <div className="card color-LT2">
                    <h5 className="card-title">Last Trade</h5>
                    <p>$ 8.332,00</p>
                    <p className="tiny">2.965.836.000 NGN</p>
                </div>
            </div>
        );
    }
}
