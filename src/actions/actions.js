import { ADD_COMPANY,ADD_COMPANY_FAILURE, ADD_COMPANY_SUCCESS } from './types'

// export const addNewCompany = (data) => dispatch => {
//    dispatch( {
//         type: NEW_COMPANY,
//         payload: data
//    });
// };

export const addNewCompany = (data) => {
   return dispatch => {
     dispatch({ type: ADD_COMPANY });
     if(data.length > 0){
         try {
            dispatch({
               type: ADD_COMPANY_SUCCESS,
               payload: data
             });
         }
      catch(error) {
         dispatch({
            type: ADD_COMPANY_FAILURE,
            error: error.response
          });
       }
      
   };
 }
};

