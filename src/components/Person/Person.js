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
import { Field, reduxForm } from "redux-form";
import { validate } from './PersonValidation';

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
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(values) {
        this.props.companyList.forEach((element) => { 
        if(element.companyName === this.state.companyName) {
          element.employees.push(values);
        }
      });
      this.props.reset();
      this.setState({
        companyName: "Please Select"
      })

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

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  
  dropdownList() {
    if(!this.props.list) {
      return null;
    }
  
    let ddList =this.props.list.map((i) => {
      return <DropdownItem key={i} onClick={this.select}>{i}</DropdownItem>
    })

    return <DropdownMenu>{ddList}</DropdownMenu>;
  }

  newField = ({ input, type, id, disabled, meta: { touched, error } }) => {
    return (
      <div>
        <Input {...input} type={type} id={id} disabled={disabled} />
        {touched && error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="ccontainer">
        <Card>
          <CardHeader>Create New Person</CardHeader>
          <Form onSubmit={handleSubmit(this.onFormSubmit)}>
            <FormGroup>
              <Label for="personName">Name</Label>
              <Field
                name="personName"
                type="text"
                component={this.newField}
                id="personName"
                disabled={this.props.disabled}
              />
            </FormGroup>
            <FormGroup>
              <Label for="personAddress">Address</Label>
              <Field
                name="personAddress"
                type="text"
                component={this.newField}
                id="personAddress"
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
                {this.dropdownList()}
               
              </ButtonDropdown>
            </FormGroup>
            <Button className="form-group" type="submit" disabled={this.props.disabled || pristine || submitting}>
              Save
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

const personReduxForm = reduxForm({
  form: "personForm",
  validate
})(Person);


const mapStateToProps = state => ({
  companyList: state.company.companyData
});

export default connect(
  mapStateToProps,
  )(personReduxForm);

