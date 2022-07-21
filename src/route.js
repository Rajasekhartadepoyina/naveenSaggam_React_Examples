import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ParentToChild from "./components/classBasedComp/parent";
import Condition from "./components/conditional_list_render/conditional_list_render";
import EventHandel from "./components/eventHandle";
import ClassComonent from "./components/class_component_with_style/class_component_with_style"
import StateManagementClass from "./components/class_state_management/state_management_class_based"
import Parent from "./components/parent";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        
        
        <Route path="/classcomponent" element={<ClassComonent></ClassComonent>}/>
        <Route path="/statemanagementclass" element={<StateManagementClass></StateManagementClass>}></Route>
        <Route path="/render" element={<Condition />} />
        <Route path="/parent_to_child" element={<Parent />} />
        <Route path="/ParentToChild" element={<ParentToChild />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
