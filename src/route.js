import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventHandel from "./components/eventHandle";
import List from './components/List'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
