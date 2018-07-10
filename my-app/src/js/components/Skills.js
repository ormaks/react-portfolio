import React, {Component} from 'react';
import PreloaderElement from '../containers/PreloaderElement';
import TextSplit from '../containers/TextAnimation';
import Sphere from '../containers/Sphere';
import prefix from "./Config";

import '../../css/skills.scss';
import '../vendor/tagcanvas.min';
import 'animate.css';

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
                        <TextSplit splitBy="words" className='left_side_text'>Main area of my expertise is front end
                            development and everything related with this side of
                            web. HTML, CSS, JS(ES5,ES6), building Web Apps, ReactJS, building features, animations and
                            just coding layouts.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">I have also some experience with Angular,
                            Django,
                            Node.js.</TextSplit>
                        <TextSplit className='left_side_text' splitBy="words">Would like to know more?</TextSplit>
                        <p className='left_side_text'>
                            <TextSplit splitBy="words">Please check my</TextSplit>
                            <TextSplit tagName='link' splitBy="words" to="https://www.linkedin.com/in/ormaks/"
                                       target='_blank' className='left_side_link'>LinkedIn</TextSplit>
                            <TextSplit splitBy='words'>profile or just</TextSplit>
                            <TextSplit tagName='link' splitBy="words" to={prefix + "/contact"}
                                       className='left_side_link'>contact</TextSplit>
                            <TextSplit splitBy='words'>me.</TextSplit>
                        </p>
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
