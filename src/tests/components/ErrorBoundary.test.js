import { mount } from "enzyme";
import React from "react";
import ErrorBoundary from "../../components/presentational/ErrorBoundary";
const Child = () => {
  throw "error";
};
const pauseErrorLogging = codeToRun => {
  const logger = console.error;
  console.error = () => {};
  codeToRun();
  console.error = logger;
};

it("catches error and renders message", () => {
  pauseErrorLogging(() => {
    const wrapper = mount(
      <ErrorBoundary render={() => <div>Error has occurred</div>}>
        <Child />
      </ErrorBoundary>
    );
    expect(wrapper.text()).toEqual("Something went wrong.");
  });
});
