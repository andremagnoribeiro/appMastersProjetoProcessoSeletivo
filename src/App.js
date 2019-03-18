import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <>
            <Route path="/" component={Login} />
            <Switch>
              
              <Route exat path="/home" component={Home} />
            </Switch>
           
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
