import React, {Component} from 'react';
import TechsBtn from "../../../Elements/techsBTN/techsBTN";
import {Video} from "../../../Elements/VideoCover/video";

//TODO: использовать компонент
class Data extends Component {
    render() {
        return (
            <>
                <Video cover={this.props.video}/>
                <div className="content">
                    {this.props.children}
                    <TechsBtn color="white" data={this.props.data}/>
                </div>
            </>
        );
    }
}

export default Data;