import React from "react";
import Section from "./components/section/section";
import './app.css'
import Navigation from "./components/navigation/navigation";
import Main from "./components/static/main/main";
import Front from "./components/static/front/front";
import Back from "./components/static/back/back";
import Data from "./components/static/data/data";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.frontendRef = React.createRef()
        this.backendRef = React.createRef()
        this.dataRef = React.createRef()

        this.goFront = this.goFront.bind(this)
        this.goBack = this.goBack.bind(this)
        this.goData = this.goData.bind(this)
    }

    render() {
        return (
            <div className="App">
                <Navigation goFront={this.goFront} goBack={this.goBack} goData={this.goData}/>
                <Section><Main/></Section>
                <Section style={{'width': '100%'}}><div ref={this.frontendRef} style={{'width': '100%'}}><Front/></div></Section>
                <Section><div ref={this.backendRef}><Back/></div></Section>
                <Section><div ref={this.dataRef}><Data/></div></Section>
            </div>
        );
    }

    goFront = () => {
        this.frontendRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }
    goBack = () => {
        this.backendRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }
    goData = () => {
        this.dataRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }
}

export default App;
