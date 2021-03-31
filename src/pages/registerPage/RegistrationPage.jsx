import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from '../../components/loginForm/LoginForm';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

const RegistrationPage = () => {
  const history = useHistory();

  return (
    <>
      {history.location.pathname === '/registration' ? (
        <>
          {/* <h2>RegistrationForm</h2> */}
          <RegistrationForm />
          {/* <Link to="/login">Login</Link> */}
        </>
      ) : (
        <>
          {/* <h3>Login</h3> */}
          <LoginForm />
          {/* <Link to="/registration">Registration</Link> */}
        </>
      )}
    </>
  );
};

export default RegistrationPage;
