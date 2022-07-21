import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import EventHandel from "./components/eventHandle";
import Loginform from "./components/login/Loginform";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/loginform" element={<Loginform />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
