import React, { Component } from "react";
import { companyDetails } from '../../mock.js';
import {
  Card,
  CardHeader,
  CardFooter, CardBody,
} from "reactstrap";


class CompanyDetails extends Component {


  renderCards() {
    return companyDetails[0].employees.map((item,index) => {
      return (
        <Card key={index} className="cardDetails">
              <CardHeader>{item.personName}</CardHeader>
              <CardBody>
                    <label><strong>Address : </strong></label> {item.personAddress} <br/>
                                  </CardBody>
              <CardFooter />
        </Card>
      )
})
  }

  
  render() {
    return (
      <div className="ccontainer">
        <Card>
            <CardHeader>Profile Overview</CardHeader>
            <CardBody>
                      <label><strong>Address : </strong></label> {companyDetails[0].address} <br/>
                      <label><strong>Revnue : </strong></label> {companyDetails[0].revenue}<br/>
                      <label><strong>Phone : </strong></label> {companyDetails[0].phone} <br />
                      <label><strong>No of Employees : </strong></label> {companyDetails[0].employees.length}
                </CardBody>
                <CardFooter/>
        </Card>
        <Card>
            <CardHeader>Employees</CardHeader>
           {this.renderCards()}
        </Card>
      </div>
    );
  }
}

export default CompanyDetails;
