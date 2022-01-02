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
          Обучиться на Full stack разработчика можно в университетах, а так-же
          на различных курсах. <br /> <strong> Онлайн курсы: </strong>
          1) Курсы от GeekBrains <br /> 2) Курсы от Skillbox
          <br /> 3) Курсы от Специалист.ru Учебного центра при МГТУ им. Баумана{" "}
          <br /> Университеты: <br /> 1) МГУ <br /> 2) СПБГУ <br /> 3) УРФУ
        </div>
      </div>
    );
  }
}
