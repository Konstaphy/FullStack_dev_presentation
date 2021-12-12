import React, { Component } from "react";
import classes from "./dataDescription.module.css";
import { DataDescriptionText } from "./DataDescriptionText";

export class DataDescription extends Component {
  render() {
    return (
      <div className={classes.square}>
        <span className={classes.title}>Data</span>
        <div className={classes.block1} />
        <div className={classes.block2} />
        <p className={classes.desc}>{DataDescriptionText}</p>
      </div>
    );
  }
}
