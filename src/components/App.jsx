import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';
import Header from './header/Header';
// import AddMember from './addMember/AddMember';
// import MainModal from '../shared/mainModal/MainModal';
import Main from './main/Main';
// import SprintsPage from '../pages/sprintsPage/SprintsPage';

const App = () => {
  // const [showModal, setShowModal] = useState(false);
  const token = useSelector(state => state.auth.token?.accessToken);
  const refreshToken = useSelector(state => state.auth.token?.refreshToken);
  const history = useHistory();
  useEffect(async () => {
    try {
      const response = await axios.get(
        'https://sbc-backend.goit.global/project',
        {
          headers: { Authorization: token },
        },
      );
      console.log(response.data);

      // {dispatch(setProjects(response.data))}
    } catch (error) {
      const response = await axios.get(
        'https://sbc-backend.goit.global/auth/refresh',
        {
          headers: { Authorization: refreshToken },
        },
      );
    }

    if (getIsAuthenticated) return;
    if (history.location.pathname === '/') {
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
