import SignInUx from "./SignInUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { submitSignIn, cleanSignInError  } from './SignInActions';

const SignIn = () => {
  const dispatch = useDispatch();
  const {  error } = useSelector(state => state.security);
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
    cleanSignInError(dispatch);
  }
  const onSignInClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await submitSignIn(dispatch,formValues.email,formValues.password);
      Navigator('/login');
    } catch (ex) {
      console.log(ex);
    }
  }
  const onLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/login");
  }
  return (
    <SignInUx
      passwordValue={formValues.password}
      emailValue={formValues.email}
      onSignInClick={onSignInClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
      error={error}
    />
  );
}
export default SignIn;
