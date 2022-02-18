import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Drug from "./Drug";


export default function Routes() {
    return (
      <Switch>
        <Route exact path="/">
          <Drug></Drug>
        </Route>
    
      </Switch>
    );
  }