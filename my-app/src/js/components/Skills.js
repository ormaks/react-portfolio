import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import '../../css/skills.scss';
import '../vendor/tagcanvas.min';
import prefix from "Config";

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
	"Node.js"
];

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

let Skills = () => (
	<div className="skills_content">
		<span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
		<div className="skills_main">
			<div className="left_side">
				<span className="tag_h1">&lt;h1&gt;</span> <br/>
				<span className="text_h1"> Skills & </span> <br/>
				<span className="text_h1"> Experience </span> <br/>
				<span className="tag_h1">&lt;h1/&gt;</span> <br/>
				<p>Main area of my expertise is front end development and everything related with this side of web.
					HTML, CSS, JS(ES5,ES6), building Web Apps, ReactJS, building features, animations and just coding
					layouts.</p>
				<p>I have also some experience with Angular, Django, Node.js.</p>
				<p>Would like to know more?<br/>
					Please check my <Link to="https://www.linkedin.com/in/ormaks/"
										  target='_blank'>LinkedIn</Link> profile or just
					<Link to={prefix + "/contact"}> contact</Link> me.
				</p>
			</div>
			<div className="right_side">
				<Sphere id={'mySkills'} width={550} height={500} items={skills}/>
			</div>
		</div>
		<span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
	</div>
);

export default Skills;
export {Sphere};