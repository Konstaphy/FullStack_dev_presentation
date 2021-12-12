import React, { Component } from "react";
import classes from "./backendDescription.module.css";
import { BackendDescriptionText } from "./backendDescriptionText";

export class BackendDescription extends Component {
  render() {
    return (
      <div className={classes.square}>
        <span className={classes.block1} />
        <span className={classes.title}>Back</span>
        <p className={classes.desc}>{BackendDescriptionText}</p>
        <span className={classes.block2} />
      </div>
    );
  }
}
