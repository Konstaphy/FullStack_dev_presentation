import React, { Component } from "react";
import classes from "./titleBar.module.css";
import { ExitButtons } from "./ExitButtons/exitButtons";

export class TitleBar extends Component {
  render() {
    return (
      <div className={classes.titleBar}>
        <p className={classes.title}>Технологии</p>
        <ExitButtons setClosed={this.props.setClosed} />
      </div>
    );
  }
}
