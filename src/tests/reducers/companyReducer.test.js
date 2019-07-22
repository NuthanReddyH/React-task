import {
  ADD_COMPANY,
  ADD_COMPANY_FAILURE,
  ADD_COMPANY_SUCCESS
} from "../../actions/types";
import companyReducer from "../../reducers/companyReducer";

describe("Company Reducer", () => {
  const initialState = {
    loading: false,
    success: false,
    error: false,
    errorDetails: {}
  };
  it("should return the initial state", () => {
    expect(companyReducer(undefined, {})).toEqual(initialState);
  });
  it("Should handle ADD_COMPANY", () => {
    expect(companyReducer({}, { type: ADD_COMPANY, loading: true })).toEqual({
      loading: true
    });
  });
  it("should handle ADD_COMPANY_SUCCESS", () => {
    const inputAction = {
      success: true,
      loading: false,
      error: false,
      errorDetails: {},
      companyData: [
        {
          companyName: "Amazon",
          address: "410 Terry Ave Seattle,WA",
          revenue: "100000",
          employees: [],
          phone: "(022)-266-0000"
        }
      ]
    };
    expect(
      companyReducer(
        {},
        {
          type: ADD_COMPANY_SUCCESS,
          payload: inputAction.companyData
        }
      )
    ).toEqual({
      loading: false,
      companyData: [
        {
          companyName: "Amazon",
          address: "410 Terry Ave Seattle,WA",
          revenue: "100000",
          employees: [],
          phone: "(022)-266-0000"
        }
      ],
      success: true,
      errorDetails: {},
      error: false
    });
  });

  it("should handle GET_MOVIE_FAILURE", () => {
    expect(
      companyReducer(
        {},
        {
          type: ADD_COMPANY_FAILURE,
          loading: false,
          error: true,
          errorDetails: { error: "No Company found" }
        }
      )
    ).toEqual({
      loading: false,
      error: true,
      errorDetails: true
    });
  });
});
