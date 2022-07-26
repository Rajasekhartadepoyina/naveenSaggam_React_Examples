import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bcard from "./components/CountryCard/BcardDesing";
import ContactApp from "./components/contactAPP/contactApp";
import Parent1 from "./components/parent1";
import FormHandling from "./components/formHandling";
import ParentToChild from "./components/classBasedComp/parent";
import Condition from "./components/conditional_list_render/conditional_list_render";
import Digitalwatch from "./components/Digitalwatch";

import Parentprops from "./components/statesandprops/states";

import Navbar from "./components/navbar";
import Home from "./components/modules/layout/components/home";
import Employeeslist from "./components/modules/employees/components/employeeslist";
import About from "./components/modules/layout/components/about";
import Userlogin from "./components/modules/users/components/userlogin";
import Userregister from "./components/modules/users/components/userregister";
import Pagenotfound from "./components/modules/layout/components/pagenotfound";
import Student from "./components/student";
import Functional from "./components/functional-component/functional";
import TableMapping from "./components/mapTheTable/TableMapping";
import RegisterForm from "./components/registerForm";
import Getdata from "./components/statesandprops/asyncawait";
import Loginform from "./components/login/Loginform";
import List from "./components/List";
import EventHandel from "../src/components/eventHandle";
import ContactAppAxios from "./components/concatApp2/contactApp2";
// import EventHandel from "./components/eventHandle";
import CherryServer from "./components/serverConnection/cherryServer";
import Parent from "./components/parent";

const AppRoutes = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/event" element={<EventHandel />} />
        <Route path="/Parentprops" element={<Parentprops />} />
        <Route path="/asyncawait" element={<Getdata />} />

        <Route path="/contactapp" element={<ContactApp />} />
        <Route path="/form" element={<FormHandling />} />
        <Route path="/childtoparent" element={<Parent1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/employees/list" element={<Employeeslist />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/login" element={<Userlogin />} />
        <Route path="/users/register" element={<Userregister />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/student" element={<Student />} />
        <Route path="/render" element={<Condition />} />
        <Route path="/parent_to_child" element={<Parent />} />
        <Route path="/ParentToChild" element={<ParentToChild />} />
        <Route path="/digitalwatch" element={<Digitalwatch />} />
        <Route path="/functional" element={<Functional />} />
        <Route path="/tablemapping" element={<TableMapping />} />
        <Route path="/CherryServer" element={<CherryServer />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/loginfrom" element={<Loginform />} />
        <Route path="/listtable" element={<List />} />
        <Route
          path="/connect"
          element={<ContactAppAxios></ContactAppAxios>}
        ></Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
