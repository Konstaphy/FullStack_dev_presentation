import React, { Component } from "react";
import classes from "./exitButtons.module.css";

export class ExitButtons extends Component {
  render() {
    return (
      <div className={classes.buttons}>
        <span className={classes.close1} onClick={this.props.setClosed} />
        <span className={classes.close2} onClick={this.props.setClosed} />
        <span className={classes.close3} onClick={this.props.setClosed} />
      </div>
    );
  }
}
