import React from 'react';
import {Route} from "react-router-dom";

import {About, Contact, Header, Home, Skills, Works,} from '../js/components'

let Layout = () => (
	<div>
		<Header/>
		<Route exact path={"/"} component={Home}/>
		<Route exact path={"/about"} component={About}/>
		<Route exact path={"/skills"} component={Skills}/>
		<Route exact path={"/works"} component={Works}/>
		<Route exact path={"/contact"} component={Contact}/>
	</div>
);


export default Layout;