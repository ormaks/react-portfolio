import React, {Component} from 'react';
import PropTypes from 'prop-types';


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

export default Sphere;