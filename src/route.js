import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventHandel from "./components/eventHandle";
import ClassComonent from "./components/class_component_with_style/class_component_with_style"
import StateManagementClass from "./components/class_state_management/state_management_class_based"


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        
        
        <Route path="/classcomponent" element={<ClassComonent></ClassComonent>}/>
        <Route path="/statemanagementclass" element={<StateManagementClass></StateManagementClass>}></Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
