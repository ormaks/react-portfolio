import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class AnimatedText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };

        console.log("ANNN " + this.props.text);
    }

    propTypes = {
        text: PropTypes.string.isRequired,
        tagName: PropTypes.string,
        to: PropTypes.string,
        target: PropTypes.string,
        splitBy: PropTypes.string,
    };
    handleHoverIn = () => {
        this.setState({
            isHovered: true
        });
        setTimeout(() => this.setState({
            isHovered: false
        }), 1000);
    };

    render() {
        return (<span
                className={"animated" + (this.state.isHovered ? " rubberBand" : "") + (this.props.splitBy === ' ' ? " split-words" : "")}
                onMouseEnter={this.handleHoverIn}>{this.props.text}</span>
        )
    }
}

class TextSplit extends Component {
    constructor(props) {
        super(props);
    }

    propTypes = {
        splitBy: PropTypes.string,
        className: PropTypes.string,
        tagName: PropTypes.string,
        to: PropTypes.string,
        target: PropTypes.string,
    };

    render() {
        let splitBy = '';
        if (this.props.splitBy === "words") {
            splitBy = ' '
        }
        if (this.props.tagName === 'link') {
            return <Link to={this.props.to} target={this.props.target}
                         className={this.props.className + (splitBy === ' ' ? " split-words" : "")}>
                <AnimatedText to={this.props.to}
                              target={this.props.target}
                              tagName={this.props.tagName}
                              text={this.props.children}/>
            </Link>;
        }
        else
            return (
                <p className={this.props.className}>
                    {this.props.children.split(splitBy).map((letter, key) => {
                        if (letter === ' ')
                            return <span key={key} className="space"/>;
                        else
                            return <AnimatedText splitBy={splitBy} key={key} text={letter}/>;
                    })}
                </p>
            )
    }
}

export default TextSplit;