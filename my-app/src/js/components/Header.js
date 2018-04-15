import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/header.scss';

const prefix = "";

const MyLink = ({to, className = "", children = []}) => {
	return (
		<Link to={prefix + to} className={(window.location.pathname === prefix + to ? "active" : "")}
		> <i className={className}/><span>{children}</span></Link>
	)
};

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: false};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		return (
			<header className={this.state.isToggleOn ? "is-open " : ()=>setTimeout((""), 4000)}>
				<div className={(this.state.isToggleOn ? "is-open " : " ") + "logo"}>
					<div className="logo_img">
						<img src="../../img/Wolf2.png" alt=""/>
						{/*<span className="o_letter">O</span>*/}
						{/*<span className="m_letter">m</span>*/}
					</div>
					<span>Ormaks</span>
				</div>
				<div className={(this.state.isToggleOn ? "is-open " : " ") + "main_buttons"}>
					<MyLink to={"/"} className=" fas fa-home"> home </MyLink>
					<MyLink to={"/about"} className="far fa-user"> about </MyLink>
					<MyLink to={"/skills"} className="fas fa-cog"> skills </MyLink>
					{/*<Link to={prefix + "/works"}> <i className="fas fa-eye"/><span> works </span></Link>*/}
					<MyLink to={"/contact"} className="far fa-envelope"> contact </MyLink>
				</div>
				<div className={(this.state.isToggleOn ? "is-open " : " ") + "social_buttons"}>
					<Link to="https://www.facebook.com/chytailo" target='_blank'><i
						className="fab fa-facebook-f"/></Link>
					<Link to="https://www.instagram.com/maks_chytailo" target='_blank'><i
						className="fab fa-instagram"/></Link>
					<Link to="https://t.me/ormakss" target='_blank'><i
						className="fab fa-telegram-plane"/></Link>
				</div>
				<div className="burger_menu">
					<button className={(this.state.isToggleOn ? "is-open " : " ") + "menu-icon"} onClick={this.handleClick}><span/></button>
				</div>
			</header>
		);
	}
}

export default Header