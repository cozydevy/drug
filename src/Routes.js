import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Drug from "./Drug";
import Result from "./Result";
import SearchDrug from "./SearchDrug";


export default function Routes() {
    return (
      <Switch>
        <Route exact path="/">
          <SearchDrug></SearchDrug>
        </Route>
        {/* <Route exact path="/result/:drugname,:otherdrugname"  component={Result}/>   */}
          
        <Route path='/result/:id' exact component={Result} />

      </Switch>
    );
  }