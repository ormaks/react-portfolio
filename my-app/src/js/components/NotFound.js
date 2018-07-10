import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../../css/notFound.scss';
import TextSplit from '../containers/TextAnimation';
import prefix from "./Config";

class NotFound extends Component {
    constructor() {
        super();
        this.state = {isHover: false}
    }

    onEnter = () => {
        this.setState(() => ({isHover: true}));
    };
    onLeave = () => {
        this.setState(() => ({isHover: false}));
    };

    render() {
        return (
            <div className="not_found_content">
                <div className="not_found_main">
                    <Link to={prefix + "/"}>
                        <svg width="100" height="100">
                            <circle cx="50%" cy="50%" r="50%" className="circle1_border">
                            </circle>
                            <circle cx="50%" cy="50%" r="49.6%"
                                    className={this.state.isHover ? "circle1_border" : "circle1"}>
                            </circle>
                            <circle cx="50%" cy="50%" r="40.4%" className="circle2_border">
                            </circle>
                            <circle onMouseEnter={this.onEnter}
                                    onMouseLeave={this.onLeave}
                                    cx="50%" cy="50%" r="40%" className="circle2">
                            </circle>
                        </svg>
                        <div className="error_text"
                             onMouseEnter={this.onEnter}
                             onMouseLeave={this.onLeave}>
                            <div className="error_number">404</div>
                            <br/><br/>
                            <TextSplit className="info">File not found</TextSplit>
                            <TextSplit className="info_click">Click here to go home</TextSplit>
                        </div>
                    </Link>

                </div>
            </div>
        );
    }
}

export default NotFound;