import React, { Component } from "react";
import { TechsBtn } from "../../../Elements/TechsBTN/techsBTN";
import cover from "../../../Assets/back.mp4";
import { BackData } from "../../../Assets/dataRepository/backData";
import Section from "../../../Elements/Section/section";
import { BackendDescription } from "./BackendDescription/backendDescription";

export class Back extends Component {
  render() {
    return (
      <Section video={cover}>
        <div className="content">
          <BackendDescription />
          <TechsBtn color="white" data={BackData} />
        </div>
      </Section>
    );
  }
}

export default Back;
