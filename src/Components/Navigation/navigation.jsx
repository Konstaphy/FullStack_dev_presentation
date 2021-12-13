import React, { Component } from "react";
import classes from "./navigation.module.css";

export class Navigation extends Component {
  render() {
    return (
      <div className={classes.nav_box}>
        <ul className={classes.list}>
          <li onClick={this.props.goCommon}>common</li>
          <li onClick={this.props.goFront}>front</li>
          <li onClick={this.props.goBack}>back</li>
          <li onClick={this.props.goData}>data</li>
        </ul>
      </div>
    );
  }
}
