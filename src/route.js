import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EventHandel from "./components/eventHandle";
import Navbar from './components/navbar'
import Home from './components/modules/layout/components/home'
import Employeeslist from './components/modules/employees/components/employeeslist'
import About from './components/modules/layout/components/about'
import Userlogin from './components/modules/users/components/userlogin'
import Userregister from './components/modules/users/components/userregister'
import Pagenotfound from "./components/modules/layout/components/pagenotfound";


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/" element={<Home />} />
        <Route path="/employees/list" element={<Employeeslist />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/login" element={<Userlogin />} />
        <Route path="/users/register" element={<Userregister />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
