import { NEW_COMPANY } from "../actions/types";

const initialState = {
    
};
export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) { 
   
    case NEW_COMPANY:
            return {
              ...state,
              companyData: action.payload
            };
    default:
      return state;
  }
}
