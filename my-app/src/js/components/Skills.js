import React, {Component} from 'react';
import '../../css/skills.css';

class Skills extends Component {


    render() {
        return (
            <div className="skills_content">
                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
                <div className="skills_main">
                    <div className="left_side">
                        <span className="tag_h1">&lt;h1&gt;</span> <br/>
                        <span className="text_h1"> Skills & </span> <br/>
                        <span className="text_h1"> Experience </span> <br/>
                        <span className="tag_h1">&lt;h1/&gt;</span> <br/>

                        <p>Hello, I am 20-year-old student from Ukraine.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam architecto, atque
                            debitis
                            delectus iusto laudantium molestias nobis, officiis quas, rerum similique ut
                            voluptatum. </p>
                        <p>Atque harum impedit in nihil odit perferendis possimus quae quia rerum unde. Aliquid, culpa
                            illum
                            minus porro quo saepe sed voluptate. A beatae, soluta.</p>
                        <p>A consectetur debitis delectus fugiat in ipsam minus nesciunt similique suscipit totam?</p>
                    </div>
                    <div className="right_side">
                        <div className="tags_cloud">
                            <div id="myCanvasContainer">
                                <canvas width="550" height="500" id="myCanvas">
                                    <p>Anything in here will be replaced on browsers that support the canvas element</p>
                                </canvas>
                            </div>
                            <div id="tags">
                                <ul>
                                    <li><a href="#">HTML5</a></li>
                                    <li><a href="#">CSS3</a></li>
                                    <li><a href="#">npm</a></li>
                                    <li><a href="#">Angular</a></li>
                                    <li><a href="#">ReactJS</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">TypeScript</a></li>
                                    <li><a href="#">C#</a></li>
                                    <li><a href="#">C++</a></li>
                                    <li><a href="#">Sass</a></li>
                                    <li><a href="#">.Net</a></li>
                                    <li><a href="#">jQuery</a></li>
                                    <li><a href="#">ES6</a></li>
                                    <li><a href="#">ES5</a></li>
                                    <li><a href="#">AJAX</a></li>
                                    <li><a href="#">Canvas</a></li>
                                    <li><a href="#">JSON</a></li>
                                    <li><a href="#">Git</a></li>
                                    <li><a href="#">Bootstrap</a></li>
                                    <li><a href="#">Flexbox</a></li>
                                    <li><a href="#">TiemViewer</a></li>
                                    <li><a href="#">XML</a></li>
                                    <li><a href="#">SVG</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <span className="tags">&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br/> &lt;/html&gt;</span>
            </div>
        );
    }
}

export default Skills;