import React, {Component} from 'react';
import { Link } from "react-router-dom";

import logo from '../../img/logo.svg';
import '../../css/header.css';

class Header extends Component {
    render() {
        return (
                <header>
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <span>Ormaks</span>
                    </div>
                    <div className="main_buttons">
                        <Link to="/"> <i className="fas fa-home"> </i><span> home </span></Link>
                        <Link to="/about"> <i className="far fa-user"> </i><span> about </span></Link>
                        <Link to="/skills"> <i className="fas fa-cog"> </i><span> skills </span></Link>
                        <Link to="/works"> <i className="fas fa-eye"> </i><span> works </span></Link>
                        <Link to="/contact"> <i className="far fa-envelope"> </i><span> contact </span></Link>
                    </div>
                    <div className="social_buttons">
                        <a className="fab fa-facebook-f"> </a>
                        <a className="fab fa-instagram"> </a>
                        <a className="fab fa-telegram-plane"> </a>
                    </div>
                </header>
        );
    }
}

export default Header;