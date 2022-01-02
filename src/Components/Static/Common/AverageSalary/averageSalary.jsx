import React, { Component } from "react";
import classes from "./averageSalary.module.css";
import { TitleBar } from "../../../Technologies/TitleBar/titleBar";
import salary from "../../../../Assets/salary.png";

export class AverageSalary extends Component {
  render() {
    return (
      <div className={classes.salo}>
        <TitleBar setClosed={this.props.setClosed} title={"Средняя зп"} />
        <div className={classes.salary__content}>
          <div className={classes.text}>
            <h1>Средння цена зависит от нескольких факторов:</h1>
            <ul className={classes.dependencies}>
              <li>- Регион</li>
              <li>- Опыт</li>
              <li>- Требуемый стек технологий</li>
            </ul>
          </div>
          <div className={classes.salary__data}>
            <img src={salary} alt="salary" className={classes.salary__image} />
          </div>
        </div>
      </div>
    );
  }
}
