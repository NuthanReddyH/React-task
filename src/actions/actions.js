export const COMPANY_DATA = "COMPANY_DATA";

export const addNewCompany = data => dispatch => {
  dispatch({ type: COMPANY_DATA, payload: data });
};
