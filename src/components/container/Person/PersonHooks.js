import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Form,
  FormGroup,
  Label,
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import "./Person.scss";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import useField from "../../presentational/useField";
import { validate } from "./PersonValidation";

const Person = props => {
  const companyList = useSelector(state => state.company.companyData);
  const { handleSubmit, pristine, submitting, disabled, list, reset } = props;
  const [dropdownOpen, setDropdown] = useState(false);
  const [companyName, setCompanyName] = useState("Please Select");

  const dropdownList = () => {
    if (!list) {
      return null;
    }
    let ddList = list.map(i => {
      return (
        <DropdownItem key={i} onClick={select}>
          {i}
        </DropdownItem>
      );
    });

    return <DropdownMenu>{ddList}</DropdownMenu>;
  };

  const select = event => {
    setDropdown(!dropdownOpen);
    setCompanyName(event.target.innerText);
  };

  const onFormSubmit = values => {
    companyList.forEach(element => {
      if (element.companyName === companyName) {
        element.employees.push(values);
      }
    });
    reset();
    setCompanyName("Please Select");
  };

  const handleToggle = () => {
    console.log("here");
    setDropdown(!dropdownOpen);
  }
  return (
    <div className="ccontainer">
      <Card>
        <CardHeader>Create New Person</CardHeader>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <FormGroup>
            <Label for="personName">Name</Label>
            <Field
              name="personName"
              type="text"
              component={useField}
              id="personName"
              disabled={disabled}
            />
          </FormGroup>
          <FormGroup>
            <Label for="personAddress">Address</Label>
            <Field
              name="personAddress"
              type="text"
              component={useField}
              id="personAddress"
              disabled={disabled}
            />
          </FormGroup>
          <FormGroup>
            <Label for="list">Employer </Label>
            <ButtonDropdown
              name="list"
              className="button-dropdown"
              isOpen={dropdownOpen}
              toggle={handleToggle}
            >
              <DropdownToggle caret>{companyName}</DropdownToggle>
              {dropdownList()}
            </ButtonDropdown>
          </FormGroup>
          <Button
            className="form-group"
            type="submit"
            disabled={disabled || pristine || submitting}
          >
            Save
          </Button>
        </Form>
      </Card>
    </div>
  );
};

const personReduxForm = reduxForm({
  form: "personForm",
  validate
})(Person);

export default personReduxForm;
