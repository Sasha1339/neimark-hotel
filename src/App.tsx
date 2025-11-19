import React from 'react';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {BuilderSections} from "./components/BuilderSections/BuilderSections";
import {HeaderProvider} from "./providers/HeaderProvider";
import {NavigationProvider} from "@/providers/NavigationProvider";
import {Outlet, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {TabProvider} from "@/providers/TabProvider";
import {RoomPageComponent} from "@components/RoomPageComponent/RoomPageComponent";
import {SearchPageComponent} from "@components/SearchPageComponent/SearchPageComponent";


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
                <Route path="/room" element={<RoomPageComponent />} />
                <Route path="/search" element={<SearchPageComponent />} />
              </Routes>
            </HeaderProvider>
          </TabProvider>
        </NavigationProvider>
        </Router>
    </div>
  );
}

export default App;
