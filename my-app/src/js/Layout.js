import React, {Component} from 'react';
import {Route} from "react-router-dom";

import {Header, Home, About, Skills, Works, Contact,} from '../js/components'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/skills"} component={Skills}/>
                <Route exact path={"/works"} component={Works}/>
                <Route exact path={"/contact"} component={Contact}/>
            </div>
        );
    }
}

export default Layout;