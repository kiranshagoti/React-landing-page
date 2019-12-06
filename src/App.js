import React, { Component } from 'react';
import SideNavbar from './components/SideNavbar';
import TopNavbar from './components/TopNavbar';
import Chart from './components/Chart';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <SideNavbar />
                <TopNavbar />
                <Chart />
            </div>
        );
    }
}
