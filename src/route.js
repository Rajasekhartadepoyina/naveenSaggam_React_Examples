import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Condition from "./components/conditional_list_render/conditional_list_render";
import EventHandel from "./components/eventHandle";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/render" element={<Condition />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
