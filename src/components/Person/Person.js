import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import './Person.scss';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dropdownOpen: false
    };
  }

  render() {
    return (
      <div className="ccontainer">
        <Card>
          <CardHeader>Create New Person</CardHeader>
          <Form onSubmit={this.onFormSubmit}>
            <FormGroup>
              <Label for="personName">Name</Label>
              <Input type="text" name="personName" id="personName" />
            </FormGroup>
            <FormGroup>
              <Label for="address">Name</Label>
              <Input type="text" name="address" id="address" />
            </FormGroup>
            <FormGroup>
              <Dropdown isOpen={this.state.dropdownOpen}>
                <DropdownToggle caret>Select Employer</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Foo Action</DropdownItem>
                  <DropdownItem>Bar Action</DropdownItem>
                  <DropdownItem>Quo Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </FormGroup>
            <Button className="form-group" type="submit">Save</Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Person;
