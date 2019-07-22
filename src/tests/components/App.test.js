import React from "react";
import { shallow, mount } from "enzyme";
import HomePage from "../../components/container/HomePage/HomePage";
import CompanyDetails from "../../components/presentational/CompanyDetails/CompanyDetails";
import { Route } from "react-router-dom";
import { MemoryRouter } from "react-router";
import App from "../../App";

describe("routes using array of routers", () => {
  it("should show Home Page component for / router", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.find(HomePage)).toHaveLength(1);
  });
  it("renders correct routes", () => {
    const wrapper = shallow(<App />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap["/details"]).toBe(CompanyDetails);
  });
});
