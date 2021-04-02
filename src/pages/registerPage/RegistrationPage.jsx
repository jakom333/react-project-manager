import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../../components/loginForm/LoginForm';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

const RegistrationPage = () => {
  const history = useHistory();

  return (
    <>
      {history.location.pathname === '/registration' ? (
        <>
          <RegistrationForm />
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
};

export default RegistrationPage;
