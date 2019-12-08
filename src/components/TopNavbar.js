import React, { Component } from 'react';
import { Navbar, Nav } from 'reactstrap';

export default class TopNavbar extends Component {
    render() {
        return (
            <>
                <Navbar>
                    <div class="NavbarArrangement">
                        {/* <Nav className="mr-auto" navbar></Nav> */}
                        <button className="button">New Transaction + </button>
                        <div className="naviconsArrangement">
                            <img className="navicons" alt="" src="../images/search.png" />
                            <img className="navicons" alt="" src="../images/support.png" />
                            <img className="navicons" alt="" src="../images/notification.png" />
                        </div>
                    </div>
                </Navbar>
            </>
        );
    }
}
