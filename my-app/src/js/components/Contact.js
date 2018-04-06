import React, {Component} from 'react';
import {compose, withProps, withStateHandlers} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import {VelocityComponent} from 'velocity-react';
import validator from 'validator'

import '../../css/contact.scss';
// import logo from './build/img/MyMarker.png';
const logo = 'build/img/MyMarker.png';

let defaultProps = {
	/*GOOGLE MAPS PROPS*/
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
	mapInfoBoxStyle: {
		color: '#08fdd8',
		backgroundColor: 'black',
		margin: '14px',
		textAlign: 'center',
		fontSize: '20px',
		fontWeight: 'bold',
		fontFamily: '"MyLogo", sans-serif',
		opacity: .85,
		padding: `12px`,
		width: '250px',
		transform: 'none',
		borderRadius: '4px'
	},

	/*flyLetter ANIMATION PROPS*/
	flyLetterStyles: {
		input: {
			height: 40,
			backgroundColor: '#ddd',
			width: 200,
			border: 'none',
			outline: 'none',
			marginBottom: 20,
			fontSize: 22,
			padding: 8,
		},
		letters: {
			position: 'absolute',
			top: -200,
			left: '7%',
			opacity: 1,
			display: 'block',
			height: 140,
			width: '32%',
			color: 'white',
		},
		letter: {
			opacity: 0,
			marginTop: '90%',
			fontSize: 16,
			fontFamily: 'monospace',
			float: 'left',
			height: 0
		}
	},
};

/*GOOGLE MAPS FUNC*/
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
				<div style={defaultProps.mapInfoBoxStyle}>
					Heeey!=) <br/> Kredens cafe is my second home! <br/>
					Maybe I'm here at this moment! <br/>
					So, you are welcome!:)
				</div>
			</InfoBox>}
		</Marker>
	</GoogleMap>
);
/*END GOOGLE MAPS FUNC*/

/*flyLetter ANIMATION*/
const VelocityLetter = ({letter}) => (
	<VelocityComponent
		runOnMount
		animation={{opacity: 1, marginTop: 0}}
		duration={1000}
	>
		<p style={defaultProps.flyLetterStyles.letter}>{letter}</p>
	</VelocityComponent>
);
/*END flyLetter ANIMATION*/

/*VALIDATION MAPS FUNC*/
function validate(email, msg) {
	return {
		email: !validator.isEmail(email),
		msg: msg.length <= 10,
	};
}

/*END VALIDATION MAPS FUNC*/

class Contact extends Component {
	/*VALIDATION p1*/
	constructor() {
		super();
		this.state = {
			email: '',
			msg: '',

			touched: {
				email: false,
				msg: false,
			},
		};
	};

	handleMsgChange = (evt) =>{
		this.setState({msg: evt.target.value});


		const letters = evt.target.value.split('');
		const arr = [];
		letters.forEach((l, i) => {
			arr.push(<VelocityLetter letter={l} key={i}/>)
		});
		this.setState(() => ({letters: arr}))
	};

	handleEmailChange = (evt) => {
		this.setState({email: evt.target.value});

		const letters = evt.target.value.split('');
		const arr = [];
		letters.forEach((l, i) => {
			arr.push(<VelocityLetter letter={l} key={i}/>)
		});
		this.setState(() => ({letters: arr}))
	};
	handleBlur = (field) => () => {
		this.setState({
			touched: {...this.state.touched, [field]: true},
		});
	};
	/*END VALIDATION p1*/

	/*flyLetter ANIMATION*/
	state = {
		letters: [],
	};
	onChange = (e) => {
		const letters = e.target.value.split('');
		const arr = [];
		letters.forEach((l, i) => {
			arr.push(<VelocityLetter letter={l} key={i}/>)
		});
		this.setState(() => ({letters: arr}))
	};

	/*flyLetter ANIMATION*/

	render() {
		/*VALIDATION p1*/
		const errors = validate(this.state.email, this.state.msg);
		const shouldMarkError = (field) => {
			const hasError = errors[field];
			const shouldShow = this.state.touched[field];

			return hasError ? shouldShow : false;
		};
		/*END VALIDATION p1*/

		return <div className="contact_content">
			<div style={defaultProps.flyLetterStyles.letters}>
				{
					this.state.letters
				}
			</div>
			<span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
			<div className="contact_main">
				<div className="left_side">
					<span className="tag_h1">&lt;h1&gt;</span> <br/>
					<span className="text_h1"> Contact </span> <br/>
					<span className="tag_h1">&lt;h1/&gt;</span> <br/>
					<form id="contact" autoComplete="off">
						<div className="input_row">
							<div className="half">
								<input onChange={this.onChange} placeholder="Name" type="text" name="name"/>
							</div>
							<div className="half">
								<input
									className={shouldMarkError('email') ? "error" : ""}
									type="email"
									placeholder="Email"
									value={this.state.email}
									onChange={this.handleEmailChange}
									onBlur={this.handleBlur('email')}
									required
								/>
							</div>
						</div>
						<div className="input_row">
							<input onChange={this.onChange} className="" placeholder="Subject" type="text"
								   name="subject"/>
							<label className=""> </label>
						</div>
						<div className="input_row">
							<textarea placeholder="Message" name="msg" required
									  type="text"
									  minLength="10"
									  className={shouldMarkError('msg') ? "error" : ""}
									  value={this.state.msg}
									  onChange={this.handleMsgChange}
									  onBlur={this.handleBlur('msg')}/>
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