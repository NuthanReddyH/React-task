import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardFooter, CardBody,
} from "reactstrap";


class CompanyDetails extends Component {


  renderCards(employeeList) {
    return employeeList.map((item,index) => {
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
    const { company, employees} = this.props.location.state;
    let employeeList = [];

    for (let i = 0; i< employees.length; i++) {
      if( company.companyName === employees[i].companyName) {
              employeeList.push(employees[i]);
      }
    }
    return (
      <div className="ccontainer">
        <Card>
            <CardHeader>Profile Overview</CardHeader>
            <CardBody>
                      <label><strong>Address : </strong></label> {company.address} <br/>
                      <label><strong>Revnue : </strong></label> {company.revenue}<br/>
                      <label><strong>Phone : </strong></label> {company.phone} <br />
                      <label><strong>No of Employees : </strong></label> {employeeList.length}
                </CardBody>
                <CardFooter/>
        </Card>
        <Card>
            <CardHeader>Employees</CardHeader>
           {this.renderCards(employeeList)}
        </Card>
      </div>
    );
  }
}

export default CompanyDetails;
