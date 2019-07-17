import { NEW_PERSON } from "../actions/types";

const initialState = {
    
};
export default function(state = initialState, action) {
  
  switch (action.type) { 
   
    case NEW_PERSON:
            return {
              ...state,
              personList: action.payload
            };
    default:
      return state;
  }
}
