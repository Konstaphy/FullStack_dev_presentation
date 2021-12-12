import React, { Component } from "react";
import { TechsBtn } from "../../../Elements/TechsBTN/techsBTN";
import cover from "../../../Assets/data.mp4";
import { DatabaseData } from "../../../Assets/dataRepository/databasesData";
import Section from "../../../Elements/Section/section";
import { DataDescription } from "./DataDescription/DataDescription";

class Data extends Component {
  render() {
    return (
      <Section video={cover}>
        <div className="content">
          <DataDescription />
          <TechsBtn color="white" data={DatabaseData} />
        </div>
      </Section>
    );
  }
}

export default Data;
