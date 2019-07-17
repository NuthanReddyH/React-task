import React, { Component } from "react";
import Company from "../Company/Company.js";
import './HomePage.scss';
import DisplayCompany from "../DisplayCompany.js/DisplayCompany.js";
import Person from "../Person/Person.js";

class HomePage extends Component {

  render() {
    return (
      <div className="some-page-wrapper">
        <div className="row">
          <div className="column-left">
            <div className="blue-column"><DisplayCompany  /></div>
          </div>
          <div className="column-right">
            <div className="green-column"><Company /></div>
            <div className="green-column"><Person /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
