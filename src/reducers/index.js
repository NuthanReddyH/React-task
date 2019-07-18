import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  company: companyReducer,
  form: formReducer
});
