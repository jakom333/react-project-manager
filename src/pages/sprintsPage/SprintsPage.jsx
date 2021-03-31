import React, { useState } from 'react';
import SprintsList from '../../components/sprintsList/SprintsList';
import MainModal from '../../shared/mainModal/MainModal';
import CreateSprintForm from '../../components/createSprintForm/CreateSprintForm';

const SprintsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const createSprint = data => {
    // fetchSproint(data);
  };
  return (
    <div>
      <SprintsList />
      <button type="button" onClick={() => setShowModal(true)}>
        Open modal
      </button>
      <MainModal
        showModal={showModal}
        setShowModal={setShowModal}
        onClose={() => setShowModal(false)}
        // callback={}
      >
        <CreateSprintForm createSprint={createSprint} />
      </MainModal>
    </div>
  );
};

export default SprintsPage;
