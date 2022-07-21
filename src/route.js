import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ParentToChild from "./components/classBasedComp/parent";
import Condition from "./components/conditional_list_render/conditional_list_render";
import Digitalwatch from "./components/Digitalwatch";
import EventHandel from "./components/eventHandle";
import Student from "./components/student";
import Parent from "./components/parent";
import TableMapping from "./components/mapTheTable/TableMapping";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/student" element={<Student />} />
        <Route path="/render" element={<Condition />} />
        <Route path="/parent_to_child" element={<Parent />} />
        <Route path="/ParentToChild" element={<ParentToChild />} />
        <Route path="/digitalwatch" element={<Digitalwatch />} />
        <Route path="/tablemapping" element={<TableMapping />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
