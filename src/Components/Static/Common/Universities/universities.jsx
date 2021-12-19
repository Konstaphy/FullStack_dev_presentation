import React, { Component } from "react";
import classes from "./universities.module.css";
import { TitleBar } from "../../../Technologies/TitleBar/titleBar";

export class Universities extends Component {
  render() {
    return (
      <div className={classes.uni}>
        <TitleBar setClosed={this.props.setClosed} title={"Места для обучения"} />
      </div>
    );
  }
}
