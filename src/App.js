import React from 'react';
import './scss/App.scss';
import {HashRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";


const App = () => {
  return (
    <HashRouter>
      <>
        <Route exact path="/" component={Home} />
      </>
    </HashRouter>
    
  )
}

export default App;
