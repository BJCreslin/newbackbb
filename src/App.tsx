import React, {FunctionComponent} from 'react';
import './App.css';
import {HeaderComponent} from "./components/Header/HeaderComponent";
import {MainComponent} from "./components/Main/MainComponent";
import {FooterComponent} from "./components/Footer/FooterComponent";

export const App: FunctionComponent = () => {
    return (
        <div className= "wrapper px1">
            <HeaderComponent/>
            <MainComponent/>
            {/*<FooterComponent/>*/}

        </div>

    )
}

export default App;
