import React, {Component} from 'react';
import classes from './techsBTN.module.css'
import Popup from "./popup";

class TechsBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            theme: classes.white
        }
        this.setClosed = this.setClosed.bind(this)
        this.setOpen = this.setOpen.bind(this)
    }

    componentDidMount() {
        this.setState({...this.state, theme: this.props.color === "black" ? classes.black : classes.white})
    }

    setClosed() {
        this.setState({...this.state, open: false})
    }
    setOpen() {
        this.setState({...this.state, open: true})
    }
    render() {
        return (
            <>
                <button className={[classes.techs, this.state.theme].join(' ')} onClick={() => {this.setOpen()}}/>
                {this.state.open ? <Popup setClosed={this.setClosed}/> : <></>}
            </>


        );
    }
}

export default TechsBtn;