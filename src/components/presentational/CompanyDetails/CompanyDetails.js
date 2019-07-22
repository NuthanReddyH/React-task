import React from "react";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import "./CompanyDetails.scss";


const renderCards = employeeList => {
  return employeeList.map((item, index) => {
    return (
      <Card key={index} className="cardDetails">
        <CardHeader>{item.personName}</CardHeader>
        <CardBody>
          <label>
            <strong>Address : </strong>
          </label>{" "}
          {item.personAddress} <br />
        </CardBody>
        <CardFooter />
      </Card>
    );
  });
}

const CompanyDetails = (props) => {
  const { company } = props.location.state;

  return (
    <div className="ccontainer">
      <Card>
        <CardHeader>Profile Overview</CardHeader>
        <CardBody>
          <label>
            <strong>Address : </strong>
          </label>{" "}
          {company.address} <br />
          <label>
            <strong>Revnue : </strong>
          </label>{" "}
          {company.revenue}
          <br />
          <label>
            <strong>Phone : </strong>
          </label>{" "}
          {company.phone} <br />
          <label>
            <strong>No of Employees : </strong>
          </label>{" "}
          {company.employees.length}
        </CardBody>
        <CardFooter />
      </Card>
      { company.employees.length > 0 && <Card>
        <CardHeader>Employees</CardHeader>
        {renderCards(company.employees)}
      </Card> }
    </div>
  );
}

export default CompanyDetails;
