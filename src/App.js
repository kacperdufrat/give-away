import React from 'react';
import './scss/App.scss';
import {HashRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";

const App = () => {
  return (
    <HashRouter>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/logowanie" component={Login} />
        <Route path="/rejestracja" component={Register} />
        <Route path="/wylogowano" component={Logout} />
      </>
    </HashRouter>
    
  )
}

export default App;
