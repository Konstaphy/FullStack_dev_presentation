import React, { Component } from "react";
import classes from "./video.module.css";

export class Video extends Component {
  whiteClass;
  constructor(props) {
    super(props);
    this.whiteClass = this.props.white ? classes.white : "";
  }

  render() {
    return (
      <video className={[classes.background__title, this.whiteClass].join(" ")} autoPlay loop muted>
        <source src={this.props.cover} type="video/mp4" />
      </video>
    );
  }
}
