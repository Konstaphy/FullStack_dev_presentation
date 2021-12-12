import React, { Component } from "react";
import classes from "./main.module.css";
import cover from "../../../Assets/cover.mp4";
import Section from "../../../Elements/Section/section";
import { MainDescriptionText } from "./mainDescriptionText";

export class Main extends Component {
  render() {
    return (
      <Section video={cover}>
        <div className={classes.square}>
          <div className={classes.title_box}>
            <p className={classes.title}>Full-stack web developer</p>
          </div>
          <div className={classes.description_box}>
            <p className={classes.description}>{MainDescriptionText}</p>
          </div>
        </div>
      </Section>
    );
  }
}

export default Main;
