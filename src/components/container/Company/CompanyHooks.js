import React from "react";
import { Card, CardHeader, Form, FormGroup, Label, Button } from "reactstrap";
import "./Company.scss";

import { addNewCompany } from "../../../actions/actions";
import { Field, reduxForm } from "redux-form";
import { useSelector, useDispatch } from "react-redux";
import useField from "../../presentational/useField";
import { validate } from "./CompanyValidation";

const CompanyHooks = props => {
  const companyList = useSelector(state => state.company.companyData);
  const dispatch = useDispatch();
  const addCompany = company => dispatch(addNewCompany(company));
  const { handleSubmit, pristine, submitting, reset } = props;

  const onSubmit = values => {
    let employees = [],
      companies = [];
    if (companyList) {
      companies = [...companyList];
    }
    values.employees = employees;
    companies.push(values);
    addCompany(companies);
    reset();
  };

  return (
    <div className="ccontainer">
      <Card>
        <CardHeader>Create New Company</CardHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="companyName">Name</Label>
            <Field
              name="companyName"
              type="text"
              component={useField}
              id="companyName"
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Field
              name="address"
              type="text"
              component={useField}
              id="address"
            />
          </FormGroup>
          <FormGroup>
            <Label for="revenue">Revenue</Label>
            <Field
              name="revenue"
              type="number"
              component={useField}
              id="revenue"
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone</Label>
            <Field name="phone" type="text" component={useField} id="phone" />
          </FormGroup>
          <Button
            className="form-group"
            type="submit"
            disabled={pristine || submitting}
          >
            Save
          </Button>
        </Form>
      </Card>
    </div>
  );
};
const companyReduxForm = reduxForm({
  form: "companyForm",
  validate
})(CompanyHooks);

export default companyReduxForm;
