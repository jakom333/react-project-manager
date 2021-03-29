import MainModal from '../shared/mainModal/MainModal';

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <button type="button">Open modal</button>
      <MainModal open={true}>
        <h2>In Modal</h2>
      </MainModal>
    </div>
  );
};

export default App;
