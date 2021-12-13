import React, { Component } from "react";
import classes from "./common.module.css";
import Section from "../../../Elements/Section/section";
import cover from "../../../Assets/aurora.mp4";

export class Common extends Component {
  render() {
    return (
      <Section video={cover}>
        <div className="content">
          <div className={classes.commonWrapper}>Средние зарплаты на рынке: 100-1000к агада хуй там</div>
        </div>
      </Section>
    );
  }
}
