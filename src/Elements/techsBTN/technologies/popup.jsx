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
                    {this.props.data?.map((elem) => {
                        return(
                            <div className={classes.wrapper__item}>
                                <img src={elem.image} alt={elem.title}/>
                                <p>{elem.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Popup;