import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default class SideNavbar extends Component {
    render() {
        return (
            <>
                <SideNav style={{ backgroundColor: 'white', color: 'darkgray' }}>
                    <p>Omniview</p>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="Overview">
                        <NavItem className="items">
                            <NavIcon>
                                <img className="icons" src="../images/dashboard.svg" />
                            </NavIcon>
                            <NavText className="text">Overview</NavText>
                        </NavItem>
                        <NavItem className="items">
                            <NavIcon>
                                <img className="icons" src="../images/account.png" />
                            </NavIcon>
                            <NavText className="text">Bank accounts</NavText>
                        </NavItem>
                        <NavItem className="items">
                            <NavIcon>
                                <img className="icons" src="../images/trade.png" />
                            </NavIcon>
                            <NavText className="text">TradeFX</NavText>
                        </NavItem>
                        <NavItem className="items">
                            <NavIcon>
                                <img className="icons" src="../images/transaction.png" />
                            </NavIcon>
                            <NavText className="text">Transactions</NavText>
                        </NavItem>
                        <NavItem className="items" style={{ marginTop: '100px' }}>
                            <NavIcon>
                                <img className="icons" src="../images/tsettings.png" />
                            </NavIcon>
                            <NavText className="text">Settings</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </>
        );
    }
}
