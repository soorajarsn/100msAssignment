import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Index from "../Index/Index";

function App(props) {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Index {...props} />} />
        </Switch>
      </Router>
      {/* Portals here */}
    </React.Fragment>
  );
}
export default App;
