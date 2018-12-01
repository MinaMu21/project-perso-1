import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className=" w-100 navColor">
                <Navbar className="navbar navbar-default " light expand="md">
                    <NavbarBrand><Link to="/"><img className='img-fluid ' src="placeholder" alt="Mon Projet " /></Link></NavbarBrand>

                    <Nav className="flex-row-reverse fixed-top" navbar>
                        <NavItem>
                            <NavLink exact to="/allchart">
                                <Link className="colorLink responsiveNav" to="/allchart/">Graphiques</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/deck">
                                <Link className="colorLink responsiveNav" to="/deck/">Mon Deck</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/calculatrice2">
                                <Link className="colorLink responsiveNav" to="/calculatrice2/">Ma Calculatrice</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/chronometre">
                                <Link className="colorLink responsiveNav" to="/chronometre/">Mon Chronometre</Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink exact to="/compteur">
                                <Link className="colorLink responsiveNav" to="/compteur/"> Mon Compteur</Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink exact to="/">
                                <Link className="colorLink responsiveNav" to="/">Accueil</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;