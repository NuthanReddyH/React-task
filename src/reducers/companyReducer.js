import { COMPANY_DATA } from "../actions/actions.js";

const initialState = {
    
};
export default function(state = initialState, action) {
  switch (action.type) { 
    case COMPANY_DATA:
            return {
              ...state,
              companyData: action.payload
            };
    default:
      return state;
  }
}
