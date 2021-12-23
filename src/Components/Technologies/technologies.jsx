import React, { Component } from "react";
import classes from "./technologies.module.css";
import { TitleBar } from "./TitleBar/titleBar";
import { TechList } from "./TechList/techList";

export class Technologies extends Component {
  render() {
    return (
      <div className={classes.popUp}>
        <TitleBar setClosed={this.props.setClosed} title={"Технологии"} />
        <TechList data={this.props.data} />
      </div>
    );
  }
}
