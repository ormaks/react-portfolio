import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {About, Contact, Header, Home, Skills,} from '../js/components';

class Loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadStatus: 0,
			unloadStatus: 100,
		};
	}

	componentWillMount() {
		for (let i = 0; i <= 100; i++) {
			setTimeout(() => {
				this.setState({
					loadStatus: i
				});
			}, 30 * i);
		}
	}

	componentWillUnmount() {
		for (let i = 100; i >= 0; i--) {
			this.setState({
				loadStatus: i
			});
		}
	}

	/*
		componentWillUnmount() {
			this.setState({
				loadStatus: 0
			})
		}
	*/

	render() {
		const Comp = this.props.component;
		const Body = this.state.loadStatus === 100 ?
			() => (
				<div style={{left: (100 - this.state.unloadStatus) + "%"}}><Comp/></div>
			) :
			() => (<div>Component is loading {this.state.loadStatus}%</div>);
		return <Body/>;
	}
}

let Layout = () => (
	<div>
		<Header/>
		<Switch>
			<Redirect from={"/index.html"} to={"/"}/>
			<Route exact path={"/"} component={Home}/>
			<Route exact path={"/about"} component={About}/>
			<Route exact path={"/skills"} component={Skills}/>
			{/*<Route exact path={"/works"} component={Works}/>*/}
			<Route exact path={"/contact"} component={Contact}/>
		</Switch>
	</div>
);


export default Layout;