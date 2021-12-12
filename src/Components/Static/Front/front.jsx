import React, { Component } from "react";
import { TechsBtn } from "../../../Elements/TechsBTN/techsBTN";
import { FrontData } from "../../../Assets/dataRepository/frontData";
import cover from "./../../../Assets/front.mp4";
import Section from "../../../Elements/Section/section";
import { FrontDescription } from "./FrontDescription/frontDescription";

export class Front extends Component {
  render() {
    return (
      <Section video={cover}>
        <div className="content">
          <FrontDescription />
          <TechsBtn color="white" data={FrontData} />
        </div>
      </Section>
    );
  }
}

export default Front;
