import React, { Component } from 'react';
import SideNavbar from './components/SideNavbar';
import TopNavbar from './components/TopNavbar';
import Chart from './components/Chart';
import Cards from './components/Cards';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <SideNavbar />
                        </div>
                        <div className="col-8">
                            <TopNavbar />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <Cards />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
