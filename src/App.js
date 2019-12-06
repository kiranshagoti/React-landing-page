import React, { Component } from 'react';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar';
import Chart from './components/Chart';


import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <SideNavbar />
                <Navbar />
                <Chart />
            </div>
        );
    }
}
