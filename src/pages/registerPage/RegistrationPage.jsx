import React from 'react';
import { Link, useHistory } from 'react-router-dom';
const RegistrationPage = () => {
  const history = useHistory();

  return (
    <div>
      {history.location.pathname === '/registration' ? (
        <>
          <h2>RegistrationForm</h2>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <h3>Login</h3>
          <Link to="/registration">Registration</Link>
        </>
      )}
    </div>
  );
};

export default RegistrationPage;
