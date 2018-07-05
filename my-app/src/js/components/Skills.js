import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import PreloaderElement from './PreloaderElement';


import '../../css/skills.scss';
import '../vendor/tagcanvas.min';
import 'animate.css';
import prefix from "./Config";

const skills = [
    "HTML5",
    "CSS3",
    "npm",
    "Angular",
    "ReactJS",
    "JavaScript",
    "TypeScript",
    "C#",
    "C++",
    "Sass",
    ".Net",
    "jQuery",
    "ES6",
    "ES5",
    "AJAX",
    "Canvas",
    "JSON",
    "Git",
    "Bootstrap",
    "XML",
    "SVG",
    "Node.js",
    "Gulp"
];


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
        return (<span className={"animated" + (this.state.isHovered ? " rubberBand" : "")}
                      onMouseEnter={this.handleHoverIn}>{this.props.text}</span>
        )
    }
}

class TextSplit extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.children);
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
            return <Link to={this.props.to} target={this.props.target} className={this.props.className}>
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
                            return <AnimatedText key={key} text={letter}/>;
                    })}
                </p>
            )
    }
}

class Sphere extends Component {
    static defaultProps = {
        textColour: '#08fdd8',
        shape: 'sphere'
    };
    static propTypes = {
        textColour: PropTypes.string,
        shape: PropTypes.string,
        id: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        items: PropTypes.array.isRequired,
    };

    componentDidMount() {
        window.TagCanvas.Start(this.props.id, this.props.id + 'Tags', {
            textColour: this.props.textColour,
            outlineThickness: 0.5,
            outlineColour: '#fe0853',
            maxSpeed: 0.06,
            freezeActive: true,
            shuffleTags: true,
            shape: this.props.shape,
            zoom: 1.1,
            noSelect: true,
            textFont: null,
            pinchZoom: true,
            freezeDecel: true,
            fadeIn: 3000,
            initial: [0.3, -0.1],
            depth: 0.8
        });
    }

    render() {
        return (
            <div className="tags_cloud">
                <div id={this.props.id + "Container"}>
                    <canvas width={this.props.width} height={this.props.height} id={this.props.id}>
                        <p>Anything in here will be replaced on browsers that support the canvas element</p>
                    </canvas>
                </div>
                <div id={this.props.id + "Tags"} className="sphere-tags">
                    <ul>
                        {
                            this.props.items.map((skill, key) => <li key={key}><a>{skill}</a></li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({isLoading: false}), 1500);
        // var elements = document.querySelectorAll('.text_h1');
    }

    render() {

        if (this.state.isLoading) {
            return <PreloaderElement/>
        }
        return (
            <div className="skills_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="skills_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <TextSplit className="text_h1">Skills &</TextSplit>
                        <TextSplit className="text_h1">Experience</TextSplit>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>
                        <TextSplit className='left_side_text' splitBy="words">Main area of my expertise is front end
                            development and everything related with this side of
                            web. HTML, CSS, JS(ES5,ES6), building Web Apps, ReactJS, building features, animations and
                            just coding layouts.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">I have also some experience with Angular,
                            Django,
                            Node.js.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">Would like to know more?</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words"> Please check my </TextSplit>
                        <TextSplit tagName='link' splitBy="words" to="https://www.linkedin.com/in/ormaks/"
                                   target='_blank' className='left_side_link'>LinkedIn</TextSplit>
                        <TextSplit className='left_side_text' splitBy='words'> profile or just </TextSplit>
                        <TextSplit tagName='link' splitBy="words" to={prefix + "/contact"}
                                   className='left_side_link'>contact</TextSplit>
                        <TextSplit className='left_side_text' splitBy='words'> me.</TextSplit>
                    </div>
                    <div className="right_side">
                        <Sphere id={'mySkills'} width={550} height={500} items={skills}/>
                    </div>
                </div>
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        )
    }
}

export default Skills;
export {Sphere};
