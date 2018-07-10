import React from 'react';
import '../../css/preloader.scss';

let PreloaderElement = () => (
	<div className="preloader_content">
		<div className="thecube">
			<div className="cube c1"/>
			<div className="cube c2"/>
			<div className="cube c4"/>
			<div className="cube c3"/>
		</div>
		<div className="wrapper">
			<div className="container">
				<div className="label one">Ormaks is thinking...</div>
				<div className="progress-bar">
					<div className="progress fill-1">
						<div className="glow"/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default PreloaderElement;