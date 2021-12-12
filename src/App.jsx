import React from "react";
import Section from "./Elements/section/section";
import "./app.css";
import Navigation from "./components/navigation/navigation";
import Main from "./components/static/main/main";
import Front from "./components/static/front/front";
import Back from "./components/static/back/back";
import Data from "./components/static/data/data";

//TODO: костя в папках приберись ну что за дела
class App extends React.Component {
  constructor(props) {
    super(props);
    this.frontendRef = React.createRef();
    this.backendRef = React.createRef();
    this.dataRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Navigation goFront={this.goFront} goBack={this.goBack} goData={this.goData} />
        <Section>
          <Main />
        </Section>
        <div ref={this.frontendRef}>
          <Section>
            <Front />
          </Section>
        </div>
        <div ref={this.backendRef}>
          <Section>
            <Back />
          </Section>
        </div>
        <div ref={this.dataRef}>
          <Section>
            <Data />
          </Section>
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
}

export default App;
