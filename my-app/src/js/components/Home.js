import React from 'react';
import {Link} from "react-router-dom";
import '../../css/home.scss';

import prefix from "./Config";

let Home = () => (
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
                <Link to={prefix + "/contact"} className="contact_btn">Contact me</Link>
            </div>
            <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
        </div>
        <div className="right_side">
            <img src={".." + prefix + "/img/Wolf2.png"} alt=""/>
            <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <text className="path" xmlSpace="preserve" textAnchor="middle"
                      y="195" x="370">Ormaks
                </text>
            </svg>
            <svg className="logo_mirror" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <text className="path" xmlSpace="preserve" textAnchor="middle"
                      fontSize="250" y="200" x="350">Ormaks
                </text>
            </svg>

        </div>
    </div>
);
export default Home;
