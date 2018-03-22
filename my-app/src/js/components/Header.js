import React, {Component} from 'react';
import {Link} from "react-router-dom";

import logo from '../../img/logo.svg';
import '../../css/header.css';

const prefix = "/react-portfolio";

class Header extends Component {
	render() {
		return (
			<header>
				<div className="logo">
					<img src={logo} alt="logo"/>
					<span>Ormaks</span>
				</div>
				<div className="main_buttons">
					<Link to={prefix + "/"}> <i className="fas fa-home"/><span> home </span></Link>
					<Link to={prefix + "/about"}> <i className="far fa-user"/><span> about </span></Link>
					<Link to={prefix + "/skills"}> <i className="fas fa-cog"/><span> skills </span></Link>
					<Link to={prefix + "/works"}> <i className="fas fa-eye"/><span> works </span></Link>
					<Link to={prefix + "/contact"}> <i className="far fa-envelope"/><span> contact </span></Link>
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