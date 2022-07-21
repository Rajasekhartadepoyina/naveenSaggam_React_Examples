import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ContactApp from "./components/contactAPP/contactApp";
import EventHandel from "./components/eventHandle";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/contactapp" element={<ContactApp />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
