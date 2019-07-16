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
import { connect } from "react-redux";
import { addNewCompany } from "../../actions/actions.js";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      address: "",
      revenue: "",
      phone: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit() {
    let companyData = { ...this.state };
    console.log(companyData);
    this.props.addNewCompany(companyData);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    //this.props.addNewCompany(e.target.name, e.target.value);
  };
  render() {
    console.log(this.props);
    const { companyName, address, revenue, phone } = this.state;
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
const mapStateToProps = state => ({
  CompanyData: state.company
});
const mapDispatchToProps = {
  addNewCompany
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company);
