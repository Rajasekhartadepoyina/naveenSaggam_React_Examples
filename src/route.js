import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventHandel from "./components/eventHandle";
import Parent from "./components/statesProps/state_parent";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
