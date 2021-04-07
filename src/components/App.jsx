import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { token } from '../redux/auth/auth-operations';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';
import { getProjects } from '../redux/projects/projects-operations';
import Header from './header/Header';

import Main from './main/Main';

const App = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getResult = async () => {
      if (isAuthenticated) {
        token.refresh(isAuthenticated);
        await dispatch(getProjects());
        return;
      }

      if (!isAuthenticated) {
        history.push('/registration');
      }
    };
    getResult();
  }, [history, isAuthenticated, dispatch]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
