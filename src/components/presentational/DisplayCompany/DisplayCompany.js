import React from "react";
import { Card, CardHeader, CardFooter, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import './DisplayCompany.scss'

const renderCards = companies => {
  return companies.map((item, index) => {
    return (
      <Card key={index} className="cardDetails">
        <CardHeader>{item.companyName}</CardHeader>
        <CardBody>
          <label>
            <strong>Address : </strong>
          </label>{" "}
          {item.address} <br />
          <label>
            <strong>Revnue : </strong>
          </label>{" "}
          {item.revenue}
          <br />
          <label>
            <strong>Phone : </strong>
          </label>{" "}
          {item.phone}
        </CardBody>
        <CardFooter>
          <Link to={{ pathname: "/details", state: { company: item } }}>
            Company Overview
          </Link>
        </CardFooter>
      </Card>
    );
  });
};
const DisplayCompany = ({ companies }) => {
  let message = "Currently there are no companies to review";
  if (!companies) {
    return <div className="errorMessage">{message}</div>;
  }
  let comp = renderCards(companies);
  return (
    <div className="ccontainer">
      <Card>
        <CardHeader>Companies</CardHeader>
        {comp}
      </Card>
    </div>
  );
};

export default DisplayCompany;
