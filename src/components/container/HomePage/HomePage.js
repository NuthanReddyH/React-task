import React, { Component } from "react";
import Company from "../Company/Company.js";
import './HomePage.scss';
import DisplayCompany from "../../presentational/DisplayCompany/DisplayCompany.js";
import Person from "../Person/Person.js";
import { connect } from 'react-redux';
import ErrorBoundary from '../../presentational/ErrorBoundary';


export class HomePage extends Component {

  render() {
    let disabled = !this.props.companyList;

    const list = (this.props.companyList) && this.props.companyList.map((item,i) => {
        return item.companyName;
    });
    return (
      <ErrorBoundary>
      <div className="pagewrapper" data-test="appComponent">
        <div className="row">
          <div className="column-left">
            <div className="blue-column"><DisplayCompany  companies={this.props.companyList} /></div>
          </div>
          <div className="column-right">
            <div className="green-column"><Company /></div>
            <div className="green-column"><Person disabled={disabled} list={list}/></div>
          </div>
        </div>
      </div>
      </ErrorBoundary>
    );
  }
}


const mapStateToProps = state => ({
  companyList: state.company.companyData,
});

export default connect(mapStateToProps)(HomePage);

