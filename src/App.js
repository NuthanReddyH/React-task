import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.js";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/details" component={CompanyDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
