import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './header/Header';
// import MainModal from '../shared/mainModal/MainModal';
import Main from './main/Main';

const App = () => {
  // const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname === '/') {
      history.push('/registration');
    }
  }, [history]);

  return (
    <div>
      <Header />
      {/* <RegistrationPage /> */}
      {/* <LoginPage /> */}
      <Main />

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
