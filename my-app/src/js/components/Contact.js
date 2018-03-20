import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Snap, {mina} from 'react-dom';
import '../../css/contact.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Contact extends Component {
    /* constructor(){
         super();
         let textInput = document.querySelector('input');
         let inputWrap = textInput.parentElement ;
         var inputWidth = parseInt(getComputedStyle(inputWrap).width);
         var svgText = Snap('.line');
         var qCurve = inputWidth / 2;  // For correct curving on diff screen sizes
         var textPath = svgText.path("M0 0 " + inputWidth + " 0");
         var textDown = function(){
             textPath.animate({d:"M0 0 Q" + qCurve + " 40 " + inputWidth + " 0"},150,mina.easeout);
         };
         var textUp = function(){
             textPath.animate({d:"M0 0 Q" + qCurve + " -30 " + inputWidth + " 0"},150,mina.easeout);
         };
         var textSame = function(){
             textPath.animate({d:"M0 0 " + inputWidth + " 0"},200,mina.easein);
         };
         var textRun = function(){
             setTimeout(textDown, 200 );
             setTimeout(textUp, 400 );
             setTimeout(textSame, 600 );
         };

         (function(){
             textInput.addEventListener('focus', function(){
                 var parentDiv = this.parentElement;
                 parentDiv.classList.add('active');
                 textRun();
                 this.addEventListener('blur', function(){
                     var rg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{3,9})+\.([A-Za-z]{2,4})$/;
                     this.value == 0 ? parentDiv.classList.remove('active') : null;
                     !rg.test(this.value) && this.value != 0 ?
                         (parentDiv.classList.remove('valid'), parentDiv.classList.add('invalid'), parentDiv.style.transformOrigin="center")
                         : rg.test(this.value) && this.value != 0 ?
                         (parentDiv.classList.add('valid'), parentDiv.classList.remove('invalid'), parentDiv.style.transformOrigin="bottom") :null;
                 });
                 parentDiv.classList.remove('valid', 'invalid')
             });
         })();
     }
 */

    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11,
        defaultVisible: false,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": "3"
                    },
                    {
                        "lightness": "-36"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "-63"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#92c0d3"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };



    render() {
        return (
            <div className="contact_content">
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
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: ['AIzaSyBa7trDSsEedbuHDCqBFTLtJIAtSHYrg9s'] }}
                            options={this.props.options}
                            center={this.props.center}
                            zoom={this.props.zoom}
                        >
                        </GoogleMapReact>
                    </div>
                </div>

                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        );
    }
}

export default Contact;