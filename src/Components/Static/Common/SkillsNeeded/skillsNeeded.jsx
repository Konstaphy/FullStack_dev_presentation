import React, { Component } from "react";
import classes from "./skillsNeeded.module.css";
import { TitleBar } from "../../../Technologies/TitleBar/titleBar";

export class SkillsNeeded extends Component {
  render() {
    return (
      <div className={classes.skills}>
        <TitleBar
          setClosed={this.props.setClosed}
          title={"Необходимые способности"}
        />
        <div className={classes.content}>
          <strong>Для Full Stack разработчика требуются навыки:</strong>
          <ul className={classes.liststs}>
            <li>Коммуникабельность</li>
            <li>Уравновешанность</li>
            <li>Умение широко и креативно мыслить</li>
            <li>Понимание порграммирования и основных принципов</li>
            <li>Готовность решать сложные задачи в короткий срок</li>
            <li>Навыки дизайна</li>
            <li>Умение работать в команде</li>
            <li>Умение работать на нескольких проектах одновременно</li>
          </ul>
        </div>
      </div>
    );
  }
}
