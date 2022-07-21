import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Condition from "./components/conditional_list_render/conditional_list_render";
import EventHandel from "./components/eventHandle";
import Parent from "./components/parent";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/render" element={<Condition />} />
        <Route path="/parent_to_child" element={<Parent />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
