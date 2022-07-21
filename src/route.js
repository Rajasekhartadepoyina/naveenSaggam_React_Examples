import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventHandel from "./components/eventHandle";
import Student from "./components/student";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
