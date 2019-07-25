import React from "react";
import CompanyHooks from "../Company/CompanyHooks";
import "./HomePage.scss";
import DisplayCompany from "../../presentational/DisplayCompany/DisplayCompany.js";
import Person from "../Person/PersonHooks";
import { useSelector } from "react-redux";
import ErrorBoundary from "../../presentational/ErrorBoundary";

const HomePage = () => {
  const companyList = useSelector(state => state.company.companyData);

  const list =
    companyList &&
    companyList.map((item, i) => {
      return item.companyName;
    });

  return (
    <ErrorBoundary>
      <div className="pagewrapper" data-test="appComponent">
        <div className="row">
          <div className="column-left">
            <div className="blue-column">
              <DisplayCompany companies={companyList} />
            </div>
          </div>
          <div className="column-right">
            <div className="green-column">
              <CompanyHooks />
            </div>
            <div className="green-column">
              <Person disabled={!companyList} list={list} />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default HomePage;
