import React, { Component } from "react";
import classes from "./techsBTN.module.css";
import { Technologies } from "../../Components/Technologies/technologies";

export class TechsBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  setClosed = () => {
    this.setState({ open: false });
  };
  setOpen = () => {
    this.setState({ open: true });
  };
  render() {
    return (
      <>
        <button
          className={classes.techs}
          onClick={() => {
            this.setOpen();
          }}
        />
        {this.state.open ? <Technologies setClosed={this.setClosed} data={this.props.data} /> : <></>}
      </>
    );
  }
}
