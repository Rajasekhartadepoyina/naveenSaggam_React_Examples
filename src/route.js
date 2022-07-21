import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventHandel from "./components/eventHandle";

import Parent from "./components/parent";
import Parent_State from "./components/statesProps/state_parent";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/parent" element={<Parent_State />} />
        <Route path="/parent_to_child" element={<Parent />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
