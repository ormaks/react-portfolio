// import React from 'react';
// import ReactDOM from 'react-dom';
// import './css/main.scss';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import {Router} from "react-router-dom";
//
// // ReactDOM.render(
// // 	<App/>, document.getElementById('root')
// // );
// // registerServiceWorker();
//
//
// ReactDOM.render(
// 	<Router>
//
// 			<App />
//
// 	</Router>,
// 	document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';

import './css/main.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./App";

ReactDOM.render(
	<Router>

			<App />

	</Router>,
	document.getElementById('root')
);
