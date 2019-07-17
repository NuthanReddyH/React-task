import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./Company.scss";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCompany: {
        companyName: "",
        address: "",
        revenue: "",
        phone: ""
      },
      
      companies: [],
      employes: []
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    let companies = [...this.state.companies];
    companies.push(this.state.newCompany);
    this.setState({
      companies: companies
    });
    this.setState({
      newCompany: {
        companyName: "",
        address: "",
        revenue: "",
        phone: ""
      }
    })
    console.log(companies);
  }

  handleChange = e => {
    this.setState({
      newCompany : {...this.state.newCompany,[e.target.name]: e.target.value} 
    });
  };

  render() {
    const { companyName, address, revenue, phone } = this.state.newCompany;
    return (
      <div className="ccontainer">
        <Card>
          <CardHeader>Create New Company</CardHeader>
          <Form onSubmit={this.onFormSubmit}>
            <FormGroup>
              <Label for="companyName">Name</Label>
              <Input
                type="text"
                name="companyName"
                id="companyName"
                value={companyName}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="revenue">Revenue</Label>
              <Input
                type="number"
                name="revenue"
                id="revenue"
                value={revenue}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button className="form-group" type="submit">
              Save
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Company;
