import React, {Component} from 'react';
import {compose, withProps, withStateHandlers} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {InfoBox} from "react-google-maps/lib/components/addons/InfoBox";

import '../../css/contact.css';
import logo from '../../img/MyMarker.png';

const defaultProps = {
	center: {lat: 49.8431, lng: 24.02607},
	zoom: 14,
	mapStyles: [
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#012621"
				},
				{
					"weight": 0.8
				}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "labels",
			"stylers": [
				{
					"color": "#012621"
				}
			]
		},
		{
			"featureType": "administrative.country",
			"elementType": "labels.text",
			"stylers": [
				{
					"color": "#0c0000"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"elementType": "labels.text",
			"stylers": [
				{
					"color": "#012621"
				}
			]
		},
		{
			"featureType": "administrative.locality",
			"elementType": "labels.text",
			"stylers": [
				{
					"color": "#012621"
				}
			]
		},
		{
			"featureType": "administrative.neighborhood",
			"elementType": "labels.text",
			"stylers": [
				{
					"color": "#012621"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#06c5a9"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"color": "#06c5a9"
				},
				{
					"lightness": -7
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "all",
			"stylers": [
				{
					"color": "#06c5a9"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"weight": 0.3
				},
				{
					"lightness": 10
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#047968"
				},
				{
					"lightness": "-7"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometr	y",
			"stylers": [
				{
					"color": "#06c5a9"
				},
				{
					"visibility": "on"
				},
				{
					"lightness": -15
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#06c5a9"
				},
				{
					"lightness": "7"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#06c5a9"
				},
				{
					"lightness": -34
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#333739"
				}
			]
		}
	],
	divStyle: {
		color: '#08fdd8',
		backgroundColor: 'black',
		margin: '14px',
		textAlign: 'center',
		fontSize: '18px',
		fontWeight: 'bold',
		opacity: .85,
		padding: `12px`,
		width: '300px',
		transform: 'none',
		borderRadius: '4px'
	}
};
const StyledMapWithAnInfoBox = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBa7trDSsEedbuHDCqBFTLtJIAtSHYrg9s&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{height: `100%`, width: '100%'}}/>,
		containerElement: <div style={{height: `100%`, width: '100%'}}/>,
		mapElement: <div style={{height: `100%`, width: '100%'}}/>
	}),
	withStateHandlers(() => ({
		isOpen: false,
	}), {
		onToggleOpen: ({isOpen}) => () => ({
			isOpen: !isOpen,
		})
	}),
	withScriptjs,
	withGoogleMap
)(props =>
	<GoogleMap
		defaultZoom={defaultProps.zoom}
		defaultCenter={defaultProps.center}
		defaultOptions={{styles: defaultProps.mapStyles}}
	>
		<Marker
			position={defaultProps.center}
			onClick={props.onToggleOpen}
			icon={{
				url: logo
			}}
		>
			{props.isOpen &&
			<InfoBox
				onCloseClick={props.onToggleOpen}
				options={{closeBoxURL: ``, enableEventPropagation: true}}
			>
				<div style={defaultProps.divStyle}>
					Heeey!=) <br/> Kredense cafe is my second home!XD <br/>
					Maybe I'm here at the moment! <br/>
					So, you are welcome!:)
				</div>
			</InfoBox>}
		</Marker>
	</GoogleMap>
);


class Contact extends Component {

	render() {
		return <div className="contact_content">
			<span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
			<div className="contact_main">
				<div className="left_side">
					<span className="tag_h1">&lt;h1&gt;</span> <br/>
					<span className="text_h1"> Contact </span> <br/>
					<span className="tag_h1">&lt;h1/&gt;</span> <br/>
					<form id="contact" autoComplete="off">
						<div className="input_row">
							<div className="half">
								<input placeholder="Name" type="text" name="name"/>
							</div>
							<div className="half">
								<input placeholder="Email" type="email" name="email" required/>
							</div>
						</div>
						<div className="input_row">
							<input className="" placeholder="Subject" type="text" name="subject"/>
							<label className=""> </label>
						</div>
						<div className="input_row">
							<textarea className="" placeholder="Message" name="msg" required/>
							<label className=""> </label>
						</div>
						<div className="input_submit">
							<input id="submit" type="submit" className="" value="SEND"/>
						</div>
					</form>
				</div>
				<div className="right_side">
					<StyledMapWithAnInfoBox/>
				</div>
			</div>
			<span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
		</div>;
	}
}

export default Contact;