import React, { Component } from "react";
import classes from "./common.module.css";
import Section from "../../../Elements/Section/section";
import cover from "../../../Assets/aurora.mp4";

export class Common extends Component {
  render() {
    return (
      <Section video={cover}>
        <div className={classes.commonWrapper}>
          <ul className={classes.commonWrapper__list}>
            <li className={classes.commonWrapper__item}>Средние зарплаты</li>
            <li className={classes.commonWrapper__item}>Места обучения</li>
            <li className={classes.commonWrapper__item}>Необходимые навыки</li>
          </ul>
        </div>
      </Section>
    );
  }
}
