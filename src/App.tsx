import React from 'react';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {BuilderSections} from "./components/BuilderSections/BuilderSections";
import {ButtonProvider} from "./providers/ButtonProvider";
import {NavigationProvider} from "@/providers/NavigationProvider";
import {TabProvider} from "@/providers/TabProvider";


function App() {
  return (
    <div className="App">
      <NavigationProvider>
        <TabProvider>
          <ButtonProvider>
            {/*<AppHeader/>*/}
            <BuilderSections />
          </ButtonProvider>
        </TabProvider>
      </NavigationProvider>
    </div>
  );
}

export default App;
