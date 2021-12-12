import React, { Component } from "react";
import classes from "./section.module.css";
import { Video } from "../VideoCover/video";

class Section extends Component {
  render() {
    return (
      <section className={classes.fullscreen}>
        <div className={classes.child}>
          <Video cover={this.props.video} />
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
