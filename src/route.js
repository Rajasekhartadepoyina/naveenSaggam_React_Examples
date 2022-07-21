import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
// import EventHandel from "./components/eventHandle";
import Bcard from "./components/CountryCard/BcardDesing";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/event" element={<EventHandel />} /> */}
        <Route path="/bcard" element={<Bcard />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
