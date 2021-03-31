import React from 'react';
import TaskList from '../../components/taskPageContent/taskList/TaskList';
import TasktHeader from '../../components/taskPageContent/taskHeader/TaskHeader';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import RightTaskBar from '../../components/taskPageContainer/rightTaskBar/RightTaskBar';
import SprintList from '../../components/taskPageContent/sprintList/SprintList';

const SprintPage = () => {
  return (
    <MainPageContainer>
      <LeftBar>
        <SprintList />
      </LeftBar>
      <RightBar>
        <TasktHeader />
        <RightTaskBar>
          <TaskList />
        </RightTaskBar>
      </RightBar>
    </MainPageContainer>
  );
};

export default SprintPage;
