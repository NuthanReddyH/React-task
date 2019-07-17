import { NEW_COMPANY, NEW_PERSON } from './types'

export const addNewCompany = (data) => dispatch => {
   dispatch( {
        type: NEW_COMPANY,
        payload: data
   });
};

export const addNewPerson = (data) => dispatch => {
    dispatch( {
         type: NEW_PERSON,
         payload: data
    });
 };


