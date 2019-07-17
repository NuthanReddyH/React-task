export const COMPANY_DATA = "COMPANY_DATA";
export const NEW_PERSON = "NEW_PERSON";

// export const addNewCompany = data => dispatch => {
//   dispatch({ type: COMPANY_DATA, payload: data });
// };

export const addNewCompany = (data) => {
    return {
        type: 'COMPANY_DATA',
        payload: data
    };
};


