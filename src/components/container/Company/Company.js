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
import { addNewCompany } from "../../../actions/actions";
import { Field, reduxForm } from "redux-form";
import { validate } from './CompanyValidation';

export class Company extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // onFormSubmit(e) {
  //   e.preventDefault();
  //   let companies = [...this.companies];
  //   companies.push(this.state.newCompany);
  //   this.companies = companies;
  //   this.setState({
  //     newCompany: {
  //       companyName: "",
  //       address: "",
  //       revenue: "",
  //       phone: "",
  //       employees: []
  //     }
  //   });
  //   this.props.addNewCompany(this.companies);
  // }

  // handleChange = e => {
  //   this.setState({
  //     newCompany: { ...this.state.newCompany, [e.target.name]: e.target.value }
  //   });
  // };


  onSubmit(values) {
    
    let employees = [], companies= [];
    if(this.props.companyList) {
      companies = [...this.props.companyList];
    }
    values.employees = employees;
    companies.push(values);
    this.props.addNewCompany(companies);
    this.props.reset();
    
  }
  newField = ({ input, type, id, meta: { touched, error } }) => {
    return (
      <div>
        <Input {...input} type={type} id={id} />
        {touched && error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="ccontainer">
        <Card>
          <CardHeader>Create New Company</CardHeader>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <FormGroup>
              <Label for="companyName">Name</Label>
              <Field
                name="companyName"
                type="text"
                component={this.newField}
                id="companyName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Field
                name="address"
                type="text"
                component={this.newField}
                id="address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="revenue">Revenue</Label>
              <Field
                name="revenue"
                type="number"
                component={this.newField}
                id="revenue"
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Field
                name="phone"
                type="text"
                component={this.newField}
                id="phone"
              />
            </FormGroup>
            <Button className="form-group" type="submit" disabled={pristine || submitting}>
              Save
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

const companyReduxForm = reduxForm({
  form: "companyForm",
  validate
})(Company);

const mapDispatchToProps = {
  addNewCompany
};

const mapStateToProps = state => ({
  companyList: state.company.companyData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(companyReduxForm);
