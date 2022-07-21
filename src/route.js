import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import EventHandel from "./components/eventHandle";
import Loginform from "./components/loginOptimize";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/event" element={<EventHandel />} /> */}
        <Route path="/loginform" element={<Loginform/>}/>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
