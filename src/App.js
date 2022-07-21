// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Router, Routes, Route, Navigate, } from 'react-router-dom'


import Navbar from './components/navbar'
import Home from './components/modules/layout/components/home'
import Employeeslist from './components/modules/employees/components/employeeslist'
import About from './components/modules/layout/components/about'
import Userlogin from './components/modules/users/components/userlogin'
import Userregister from './components/modules/users/components/userregister'

const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        
        <Route  path={'/'} component={Home}/>
        <Route exact={true} path={'/employeeslist'} component={Employeeslist}/>
        <Route exact={true} path={'/about'} component={About}/>
        <Route exact={true} path={'/users/login'} component={Userlogin}/>
        <Route exact={true} path={'/users/register'} component={Userregister}/>
        <Route exact={true} path={'/'} component={Home}/>
      </Routes>
    </Router>
  )
}

export default App