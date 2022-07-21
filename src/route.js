import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Parent1 from "./components/parent1";
import EventHandel from "./components/eventHandle";
import FormHandling from "./components/formHandling";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/form" element={<FormHandling />} />
        <Route path="/childtoparent" element={<Parent1 />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
