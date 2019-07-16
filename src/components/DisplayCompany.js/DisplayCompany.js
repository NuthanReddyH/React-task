import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardFooter, CardBody,
} from "reactstrap";
import { companyDetails } from '../../mock.js';

class DisplayCompany extends Component {

renderCards() {
  return companyDetails.map((item,index) => {
        return (
          <Card className="cardDetails">
                <CardHeader>{item.companyName}</CardHeader>
                <CardBody>
                      <label><strong>Address : </strong></label> {item.address} <br/>
                      <label><strong>Revnue : </strong></label> {item.revenue}<br/>
                      <label><strong>Phone : </strong></label> {item.phone}
                </CardBody>
                <CardFooter><a>Company Overview</a></CardFooter>
          </Card>
        )
  })
}


  render() {
    return (
      <div className="ccontainer">
        <Card>
            <CardHeader>Companies</CardHeader>
            {this.renderCards()}
        </Card>
      </div>
    );
  }
}

export default DisplayCompany;