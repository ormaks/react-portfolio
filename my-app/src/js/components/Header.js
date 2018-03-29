import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/header.css';

const prefix = "/react-portfolio";

const MyLink = ({to, className = "", children = []}) => {
	return (
		<Link to={prefix + to} className={(window.location.pathname === prefix + to ? "active" : "")}
		> <i className={className}/><span>{children}</span></Link>
	)
};

class Header extends Component {
	render() {
		return (
			<header>
				<div className="logo">
					<div className="logo_img">
						<span className="o_letter">O</span>
						<span className="m_letter">m</span>
					</div>
					<span>Ormaks</span>
				</div>
				<div className="main_buttons">
					<MyLink to={"/"} className=" fas fa-home"> home </MyLink>
					<MyLink to={"/about"} className="far fa-user"> about </MyLink>
					<MyLink to={"/skills"} className="fas fa-cog"> skills </MyLink>
					{/*<Link to={prefix + "/works"}> <i className="fas fa-eye"/><span> works </span></Link>*/}
					<MyLink to={"/contact"} className="far fa-envelope"> contact </MyLink>
				</div>
				<div className="social_buttons">
					<Link to="https://www.facebook.com/chytailo" target='_blank'><i
						className="fab fa-facebook-f"/></Link>
					<Link to="https://www.instagram.com/maks_chytailo" target='_blank'><i
						className="fab fa-instagram"/></Link>
					<Link to="https://t.me/ormakss" target='_blank'><i
						className="fab fa-telegram-plane"/></Link>
				</div>
			</header>
		);
	}
}

export default Header