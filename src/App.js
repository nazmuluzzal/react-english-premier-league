import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import NotMatch from "./components/NotMatch/NotMatch";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/team/:teamId">
              <TeamDetails></TeamDetails>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
