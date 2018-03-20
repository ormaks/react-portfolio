import React, {Component} from 'react';
import Map from 'google-map-react';
// import Snap, {mina} from 'react-dom';
import '../../css/contact.css';


// const demoFancyMapStyles = import from "./demoFancyMapStyles.json";
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

    // noinspection JSAnnotator
    static defaultProps = {
        center: {lat: 49.843, lng: 24.025},
        zoom: 13,
        defaultVisible: false,
        mapStyles : [
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
                "elementType": "geometry",
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
                        <Map google={this.props.google}
                            bootstrapURLKeys={{ key: ['AIzaSyBa7trDSsEedbuHDCqBFTLtJIAtSHYrg9s'] }}
                            center={this.props.center }
                            defaultZoom={this.props.zoom}
                            options={{ styles: this.props.mapStyles }}
                        >

                        </Map>
                    </div>
                </div>

                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        );
    }
}

export default Contact;