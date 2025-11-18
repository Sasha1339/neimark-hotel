import React from 'react';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {BuilderSections} from "./components/BuilderSections/BuilderSections";
import {HeaderProvider} from "./providers/HeaderProvider";
import {NavigationProvider} from "@/providers/NavigationProvider";
import {Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {TabProvider} from "@/providers/TabProvider";
import {RoomComponent} from "@components/RoomComponent/RoomComponent";


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationProvider>
          <TabProvider>
            <HeaderProvider>
              <AppHeader/>
              <Routes>
                <Route path="/" element={<BuilderSections />} />
                <Route path="/room" element={<RoomComponent />} />
              </Routes>
            </HeaderProvider>
          </TabProvider>
        </NavigationProvider>
        </Router>
    </div>
  );
}

export default App;
