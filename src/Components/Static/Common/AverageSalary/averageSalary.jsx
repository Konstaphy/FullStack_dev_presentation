import React, { Component } from "react";
import classes from "./averageSalary.module.css";
import { TitleBar } from "../../../Technologies/TitleBar/titleBar";

export class AverageSalary extends Component {
  render() {
    return (
      <div className={classes.salo}>
        <TitleBar setClosed={this.props.setClosed} title={"Средняя зп"} />
      </div>
    );
  }
}
