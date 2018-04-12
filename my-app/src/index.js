import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './css/main.scss';
// import App from "./App";

import Layout from './js/Layout';

ReactDOM.render(
	<Router>
			<Layout />
	</Router>,
	document.getElementById('root')
);
