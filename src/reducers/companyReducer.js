import { ADD_COMPANY,ADD_COMPANY_FAILURE, ADD_COMPANY_SUCCESS } from "../actions/types";

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
       loading: true
      };
      case ADD_COMPANY_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
        errorDetails: {},
        companyData: action.payload
      };
    case ADD_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorDetails: action.error
      };
    default:
      return state;
  }
}
