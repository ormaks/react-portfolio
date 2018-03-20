import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/home.css';

class Home extends Component {
    render() {
        return (
            <div className="home_content">
                <div className="left_side">
                    <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                    <div className="home_main">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <span className="text_h1"> Hi,</span> <br/>
                        <span className="text_h1"> I'm Maks,</span><br/>
                        <span className="text_h1"> web developer. </span>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>
                        <h2 className="h2_greating">Front End Developer / React / Angular</h2>
                        <Link to="/contact" className="contact_btn">Contact me</Link>
                    </div>
                    <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body/&gt; <br/> &lt;html/&gt;</span>
                </div>
                <div className="right_side">
                    <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <text className="path" xmlSpace="preserve" textAnchor="middle"
                              fontSize="250" y="195" x="370" stroke="#08fdd8" fill="#222324">Ormaks
                        </text>
                    </svg>
                    <svg className="logo_mirror" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <text className="path" xmlSpace="preserve" textAnchor="middle"
                              fontSize="250" y="200" x="350" stroke="rgba(8, 253, 216, 0.04)"
                              fill="rgba(37, 38, 39, 0.5)">Ormaks
                        </text>
                    </svg>

                </div>
            </div>
        );
    }
}

export default Home;