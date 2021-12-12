import React, { Component } from "react";
import classes from "./video.module.css";

export class Video extends Component {
  render() {
    return (
      <video className={classes.background__title} autoPlay loop muted>
        <source src={this.props.cover} type="video/mp4" />
      </video>
    );
  }
}
