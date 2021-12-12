import React, { Component } from "react";
import classes from "../front.module.css";
import { FrontDescriptionText } from "./frontDescriptionText";

export class FrontDescription extends Component {
  render() {
    return (
      <div className={classes.square}>
        <span className={classes.title}>Front</span>
        <div className={classes.block1} />
        <div className={classes.block2} />
        <p className={classes.desc}>{FrontDescriptionText}</p>
      </div>
    );
  }
}
