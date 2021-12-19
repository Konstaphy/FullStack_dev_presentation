import React, { Component } from "react";
import classes from "./common.module.css";
import Section from "../../../Elements/Section/section";
import cover from "../../../Assets/aurora.mp4";
import { Modal } from "../../../Elements/Modal/modal";
import { Info } from "../../../Elements/Info/info";
import { AverageSalary } from "./AverageSalary/averageSalary";
import { Universities } from "./Universities/universities";
import { SkillsNeeded } from "./SkillsNeeded/skillsNeeded";

export class Common extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: null,
    };
  }

  hideButtons = () => {
    if (this.state.opened) return "hidden";
    return "visible";
  };

  renderModal = () => {
    switch (this.state.opened) {
      case "salary":
        return (
          <Info>
            <AverageSalary setClosed={() => this.setState({ opened: null })} />
          </Info>
        );
      case "educationalPlaces":
        return (
          <Info>
            <Universities setClosed={() => this.setState({ opened: null })} />
          </Info>
        );
      case "skills":
        return (
          <Info>
            <SkillsNeeded setClosed={() => this.setState({ opened: null })} />
          </Info>
        );
      default:
        return <></>;
    }
  };

  render() {
    return (
      <Section video={cover}>
        <Modal toggleVisibility={() => this.setState({ opened: null })}>{this.renderModal()}</Modal>
        <div className={[this.hideButtons(), classes.commonWrapper].join(" ")}>
          <ul className={classes.commonWrapper__list}>
            <li className={classes.commonWrapper__item} onClick={() => this.setState({ opened: "salary" })}>
              Средние зарплаты
            </li>
            <li className={classes.commonWrapper__item} onClick={() => this.setState({ opened: "educationalPlaces" })}>
              Места обучения
            </li>
            <li className={classes.commonWrapper__item} onClick={() => this.setState({ opened: "skills" })}>
              Необходимые навыки
            </li>
          </ul>
        </div>
      </Section>
    );
  }
}
