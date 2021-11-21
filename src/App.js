import React from "react";
import Section from "./components/section/section";
import './app.css'
import Navigation from "./components/navigation/navigation";
import Main from "./components/static/main/main";
import Front from "./components/static/front/front";
import Back from "./components/static/back/back";
import Data from "./components/static/data/data";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Section><Main/></Section>
            <Section><Front/></Section>
            <Section><Back/></Section>
            <Section><Data/></Section>

        </div>
    );
}

export default App;
