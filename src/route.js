import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Parent from "./components/classBasedComp/parent";
import EventHandel from "./components/eventHandle";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/Parent" element={<Parent />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
