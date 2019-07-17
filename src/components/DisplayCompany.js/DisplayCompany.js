import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardFooter, CardBody,
} from "reactstrap";
import { Link } from 'react-router-dom'

class DisplayCompany extends Component {

renderCards() {
  console.log(this.props);
  return this.props.companies.map((item,index) => {
        return (
          <Card key={index} className="cardDetails">
                <CardHeader>{item.companyName}</CardHeader>
                <CardBody>
                      <label><strong>Address : </strong></label> {item.address} <br/>
                      <label><strong>Revnue : </strong></label> {item.revenue}<br/>
                      <label><strong>Phone : </strong></label> {item.phone}
                </CardBody>
                <CardFooter><Link  to={{ pathname: '/details', state: { company: item, employees: this.props.employees} }}>Company Overview</Link></CardFooter>
          </Card>
        )
  })
}


  render() {
    let message = "Currently there are no companies to display";
  if(!this.props.companies ) {
    return <div>{message}</div>
  }
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
