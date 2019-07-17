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
import { connect } from 'react-redux';
import { addNewPerson } from '../../actions/actions';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      personName: "",
      personAddress: "",
      
      companyName: "Please Select",
      dropdownOpen: false
    };
    this.PersonDetails = [];
    this.companyName = "";
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { personName, personAddress , companyName} = this.state;
  
    console.log(this.companyName);
    let PersonDetails = { personName, personAddress, companyName };
    let details = [...this.PersonDetails];
    details.push(PersonDetails);
    this.setState({
      personName: "",
      personAddress: ""
    });
    console.log(details);
  this.props.addNewPerson(details);
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  select = event => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      companyName: event.target.innerText
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  selectedEmployer = employer => {
    console.log("emp",employer);
    this.companyName = employer;
    
  };

  dropdownList() {
    if(!this.props.list) {
      return null;
    }
  
    return this.props.list.map((i) => {
      return <DropdownItem onClick={this.select}>{i}</DropdownItem>
    })
  }

  render() {
    console.log(this.props);
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
                disabled={this.props.disabled}
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
                disabled={this.props.disabled}
              />
            </FormGroup>

            <FormGroup>
              <Label for="list">Employer </Label> 
               <ButtonDropdown
                name="list"
                className="button-dropdown"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
                disabled={this.props.disabled}
              >
                <DropdownToggle caret>{this.state.companyName}</DropdownToggle>
                <DropdownMenu>
                  {this.dropdownList()}
                </DropdownMenu>
              </ButtonDropdown>
            </FormGroup>
            <Button className="form-group" type="submit" disabled={this.props.disabled}>
              Save
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}


const mapDispatchToProps = {
  addNewPerson
};

const mapStateToProps = state => ({
  personList: state.person.personList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Person);

