import React from "react";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Admindrug from "./Admindrug";
import Drug from "./Drug";
import Result from "./Result";
import SearchDrug from "./SearchDrug";


export default function Routes() {
    return (
      <BrowserRouter basename='/drug'>

      <Switch >
        <Route exact path="/" component={SearchDrug} />
     
        {/* <Route exact path="/result/:drugname,:otherdrugname"  component={Result}/>   */}
          
        <Route path='/result/:id' exact component={Result} />
        <Route exact path="/admindrug" component={Admindrug} />

        <Route path="*" render={() => "404 Not found!"} />

      </Switch>
      </BrowserRouter>
    );
  }