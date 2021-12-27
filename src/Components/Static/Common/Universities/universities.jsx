import React, { Component } from "react";
import classes from "./universities.module.css";
import { TitleBar } from "../../../Technologies/TitleBar/titleBar";

export class Universities extends Component {
  render() {
    return (
      <div className={classes.uni}>
        <TitleBar
          setClosed={this.props.setClosed}
          title={"Места для обучения"}
        />
        <div className={classes.content}>
          <div className={classes.title}>Места обучения</div>
          <ul className={classes.list}>
            <li>Через университет:</li>
            <li>Через самооброазование:</li>
          </ul>
        </div>
      </div>
    );
  }
}
