import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import personReducer from "./personReducer";


export default combineReducers({
  company: companyReducer,
  person: personReducer
});