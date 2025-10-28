import React from 'react';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {BuilderSections} from "./components/BuilderSections/BuilderSections";
import {HeaderProvider} from "./providers/HeaderProvider";
import {NavigationProvider} from "@/providers/NavigationProvider";
import {TabProvider} from "@/providers/TabProvider";


function App() {
  return (
    <div className="App">
      <NavigationProvider>
        <TabProvider>
          <HeaderProvider>
            <AppHeader/>
            <BuilderSections />
          </HeaderProvider>
        </TabProvider>
      </NavigationProvider>
    </div>
  );
}

export default App;
