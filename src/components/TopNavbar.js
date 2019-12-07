import React, { Component } from 'react';
import { Navbar, Nav } from 'reactstrap';

export default class TopNavbar extends Component {
    render() {
        return (
            <>
                <Navbar>
                    <Nav className="mr-auto" navbar></Nav>
                    <button className="button">New Transaction + </button>

                    <img className="navicons" src="../images/search.png" />
                    <img className="navicons" src="../images/support.png" />
                    <img className="navicons" src="../images/notification.png" />
                </Navbar>
            </>
        );
    }
}
