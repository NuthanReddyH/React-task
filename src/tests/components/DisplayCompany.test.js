import React from "react";
import { shallow } from "enzyme";
import { Link } from 'react-router-dom';
import { MemoryRouter } from "react-router";
import DisplayCompany from '../../components/presentational/DisplayCompany/DisplayCompany';
import CompanyDetails from '../../components/presentational/CompanyDetails/CompanyDetails';

describe("Display Company component", () => {
    const companies = [
        {
            companyName: 'Amazon',
            address: '410 Terry Ave Seattle,WA',
            revenue: '100000',
            employees: [],
            phone: '(022)-266-0000'
        }
    ]
    const instance = shallow(<DisplayCompany companies={companies} />);
    it("should match the snapshot", () => {
      expect(instance).toMatchSnapshot();
    });


    
  });
  