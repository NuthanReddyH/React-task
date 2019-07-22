import React from "react";
import { shallow } from "enzyme";

import CompanyDetails from "../../components/presentational/CompanyDetails/CompanyDetails";

describe(" Company details  component", () => {
  const companies = {
    companyName: "Amazon",
    address: "410 Terry Ave Seattle,WA",
    revenue: "100000",
    employees: [
      {
        personName: "Robert",
        PersonAddress: "West"
      }
    ],
    phone: "(022)-266-0000"
  };

  const location = {
    state: {
      company: companies
    }
  };
  const instance = shallow(<CompanyDetails location={location} />);
  it("should match the snapshot", () => {
    expect(instance).toMatchSnapshot();
  });
});
