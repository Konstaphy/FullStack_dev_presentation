import React, {Component} from 'react';
import classes from "./popup.module.css";

class Popup extends Component {

    render() {
        return (
            <div className={classes.popUp}>
                <div className={classes.titleBar}>
                    <p className={classes.title}>Технологии</p>
                    <div className={classes.buttons}>
                        <span className={classes.close1} onClick={this.props.setClosed}/>
                        <span className={classes.close2} onClick={this.props.setClosed}/>
                        <span className={classes.close3} onClick={this.props.setClosed}/>
                    </div>
                </div>
                <div className={classes.wrapper}>
                    {/*<img src="" alt="React"/>will*/}
                    {/*<img src="" alt="Redux"/>be*/}
                    {/*<img src="" alt="Angular"/>soon*/}
                    <p>Will</p>
                    <p>Be</p>
                    <p>Soon</p>
                </div>
            </div>
        );
    }
}

export default Popup;