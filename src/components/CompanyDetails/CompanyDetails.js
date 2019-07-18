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
    const { company } = this.props.location.state;
    
    return (
      <div className="ccontainer">
        <Card>
            <CardHeader>Profile Overview</CardHeader>
            <CardBody>
                      <label><strong>Address : </strong></label> {company.address} <br/>
                      <label><strong>Revnue : </strong></label> {company.revenue}<br/>
                      <label><strong>Phone : </strong></label> {company.phone} <br />
                      <label><strong>No of Employees : </strong></label> {company.employees.length}
                </CardBody>
                <CardFooter/>
        </Card>
        <Card>
            <CardHeader>Employees</CardHeader>
           {this.renderCards(company.employees)}
        </Card>
      </div>
    );
  }
}

export default CompanyDetails;
