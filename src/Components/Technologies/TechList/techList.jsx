import React, { Component } from "react";
import classes from "../technologies.module.css";

export class TechList extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        {this.props.data.map(elem => {
          return (
            <div className={classes.wrapper__item} key={elem.title}>
              <img src={elem.image} alt={elem.title} />
              <p>{elem.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
