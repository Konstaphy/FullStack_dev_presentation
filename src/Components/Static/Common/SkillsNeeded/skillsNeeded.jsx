import React, { Component } from "react";
import classes from "./skillsNeeded.css";
import { TitleBar } from "../../../Technologies/TitleBar/titleBar";

export class SkillsNeeded extends Component {
  render() {
    return (
      <div className={classes.skills}>
        <TitleBar setClosed={this.props.setClosed} title={"Необходимые способности"} />
      </div>
    );
  }
}
