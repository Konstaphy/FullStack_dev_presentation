import React, { Component } from "react";
import classes from "./modal.module.css";

export class Modal extends Component {
  stopProp = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    return (
      <div className={classes.preset} onClick={this.props.toggleVisibility}>
        <div onClick={e => this.stopProp(e)} className={classes.fullwidth}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
