import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import AddMember from './addMember/AddMember';
// import MainModal from '../shared/mainModal/MainModal';
import Main from './main/Main';
// import SprintsPage from '../pages/sprintsPage/SprintsPage';

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
