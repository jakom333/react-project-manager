import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { token } from '../redux/auth/auth-operations';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';
import { getProjects } from '../redux/projects/projects-operations';
import Header from './header/Header';
// import AddMember from './addMember/AddMember';
// import MainModal from '../shared/mainModal/MainModal';
import Main from './main/Main';
// import SprintsPage from '../pages/sprintsPage/SprintsPage';

const App = () => {
  // const [showModal, setShowModal] = useState(false);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(async () => {
    if (isAuthenticated) {
      token.refresh(isAuthenticated);
      await dispatch(getProjects());
      return;
    }

    if (!isAuthenticated) {
      history.push('/registration');
    }
  }, [history]);

  return (
    <div>
      <Header />

      <Main />
      {/* <SprintsPage/> */}
      {/* <AddMember /> */}

      {/* <h1>Hello world</h1>
      <button type="button" onClick={() => setShowModal(true)}>
        Open modal
      </button>
      <MainModal
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={() => setShowModal(false)}
      >
        <h2>Hello in Modal, it will be form in here</h2>
      </MainModal> */}
    </div>
  );
};

export default App;
