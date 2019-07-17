import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import "./Person.scss";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      personName: "",
      personAddress: "",
      companyName: "",
      value: "Please Select",
      dropdownOpen: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { personName, personAddress, companyName } = this.state;
    let PersonDetails = { personName, personAddress, companyName };
    console.log(PersonDetails);
    this.setState({
      personName: "",
      personAddress: ""
    });
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  select = event => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  selectedEmployer = employer => {
    this.setState({
      companyName: employer
    });
  };

  render() {
    return (
      <div className="ccontainer">
        <Card>
          <CardHeader>Create New Person</CardHeader>
          <Form onSubmit={this.onFormSubmit}>
            <FormGroup>
              <Label for="personName">Name</Label>
              <Input
                type="text"
                name="personName"
                id="personName"
                value={this.state.personName}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="personAddress">Address</Label>
              <Input
                type="text"
                name="personAddress"
                id="personAddress"
                value={this.state.personAddress}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="list">Employer </Label> 
               <ButtonDropdown
                name="list"
                className="button-dropdown"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle caret>{this.state.value}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.select}>Google</DropdownItem>
                  <DropdownItem onClick={this.select}>Epam</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
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

export default Person;
