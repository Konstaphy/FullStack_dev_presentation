import React, {Component} from 'react';
import classes from './techsBTN.module.css'
import Popup from "./technologies/popup";

class TechsBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    componentDidMount = () => {
        this.setState({...this.state, theme: classes.black })
    }

    setClosed = () => {
        this.setState({...this.state, open: false})
    }
    setOpen = () => {
        this.setState({...this.state, open: true})
    }
    render() {
        return (
            <>
                <button className={[classes.techs, this.state.theme].join(' ')} onClick={() => {this.setOpen()}}/>
                {this.state.open ? <Popup setClosed={this.setClosed} data={this.props.data}/> : <></>}
            </>
        );
    }
}

export default TechsBtn;