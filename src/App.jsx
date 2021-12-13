import React from "react";
import "./app.css";
import { Navigation } from "./Components/Navigation/navigation";
import { Main } from "./Components/Static/Main/main";
import { Front } from "./Components/Static/Front/front";
import { Back } from "./Components/Static/Back/back";
import Data from "./Components/Static/Data/data";
import { Common } from "./Components/Static/Common/common";

//TODO: костя в папках приберись ну что за дела
class App extends React.Component {
  constructor(props) {
    super(props);
    this.frontendRef = React.createRef();
    this.backendRef = React.createRef();
    this.dataRef = React.createRef();
    this.commonRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Navigation goFront={this.goFront} goBack={this.goBack} goData={this.goData} goCommon={this.goCommon} />
        <Main />
        <div ref={this.commonRef}>
          <Common />
        </div>
        <div ref={this.frontendRef}>
          <Front />
        </div>
        <div ref={this.backendRef}>
          <Back />
        </div>
        <div ref={this.dataRef}>
          <Data />
        </div>
      </div>
    );
  }

  goFront = () => {
    this.frontendRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  goBack = () => {
    this.backendRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  goData = () => {
    this.dataRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  goCommon = () => {
    this.commonRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
}

export default App;
