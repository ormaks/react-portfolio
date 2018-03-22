import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {About, Contact, Header, Home, Skills,} from '../js/components';
/*
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

	/!*
		componentWillUnmount() {
			this.setState({
				loadStatus: 0
			})
		}
	*!/

	render() {
		const Comp = this.props.component;
		const Body = this.state.loadStatus === 100 ?
			() => (
				<div style={{left: (100 - this.state.unloadStatus) + "%"}}><Comp/></div>
			) :
			() => (<div>Component is loading {this.state.loadStatus}%</div>);
		return <Body/>;
	}
}*/

const prefix = "/react-portfolio";

let Layout = () => (
	<div>
		<Header/>
		<Redirect from={"/"} to={prefix}/>
		<Route path={prefix}>
			<Switch>
				<Redirect from={prefix + "/index.html"} to={prefix + "/"}/>
				<Route exact path={prefix + "/"} component={Home}/>
				<Route path={prefix + "/about"} component={About}/>
				<Route path={prefix + "/skills"} component={Skills}/>
				{/*<Route exact path={prefix + "/works"} component={Works}/>*/}
				<Route path={prefix + "/contact"} component={Contact}/>
			</Switch>
		</Route>
	</div>
);


export default Layout;