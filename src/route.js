import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventHandel from "./components/eventHandle";

import Parent from "./components/parent";
import Parentprops from "./components/statesandprops/states";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/Parentprops" element={<Parentprops />} />
        
        <Route path="/parent_to_child" element={<Parent />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
