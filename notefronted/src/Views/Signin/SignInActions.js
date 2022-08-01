import getSignIn from '../../Services/api/signInApi';
const SIGNIN_LOADING = "SIGNIN_LOADING";
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
const SIGNIN_FAILED = "SIGNIN_FAILED";
const SIGNIN_CLEAN_ERROR = "SIGNIN_CLEAN_ERROR";


export const submitSignIn = async (dispatch, email, password) => {
    
  try {
    dispatch({ type: SIGNIN_LOADING, payload: null });
    const { data } =  await getSignIn(email, password);
    
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    console.log(data);
  } catch (ex) {
    console.log(ex);
    dispatch({ type: SIGNIN_FAILED, payload: 'Error al registrar usuario!' });
    throw Error("Error al registrar usuario!");
  }
}

export const cleanSignInError = (dispatch) => {
  dispatch({ type: SIGNIN_CLEAN_ERROR, payload: null });
}