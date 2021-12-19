import React, { Component } from "react";
import classes from "./info.module.css";

export class Info extends Component {
  render() {
    return <div className={classes.info}>{this.props.children}</div>;
  }
}
