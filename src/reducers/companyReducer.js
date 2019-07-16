import { COMPANY_DATA } from "../actions/actions.js";

const initialState = {
    loading: false,
};
export default function(state = initialState, action) {
  switch (action.type) { 
    case COMPANY_DATA:
            return {
              ...state,
              loading: true
            };
    default:
      return state;
  }
}
