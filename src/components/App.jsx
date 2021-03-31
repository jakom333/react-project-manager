import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Main from './main/Main';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/registration');
    }
  }, [history]);

  return (
    <div>
      <Main />
    </div>
  );
};

export default App;
