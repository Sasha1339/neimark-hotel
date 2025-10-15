import React from 'react';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {BuilderSections} from "./components/BuilderSections/BuilderSections";
import {ButtonProvider} from "./providers/ButtonProvider";


function App() {
  return (
    <div className="App">
      <ButtonProvider>
        <AppHeader/>
        <BuilderSections />
      </ButtonProvider>
    </div>
  );
}

export default App;
