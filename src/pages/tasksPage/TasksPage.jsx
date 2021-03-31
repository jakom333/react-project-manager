import React from 'react';
import TaskList from '../../components/taskPageContent/taskList/TaskList';
import TasktHeader from '../../components/taskPageContent/taskHeader/TaskHeader';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import RightItemBar from '../../components/taskPageContainer/rightItemBar/RightItemBar';
import SprintList from '../../components/taskPageContent/sprintList/SprintList';

const SprintPage = () => {
  return (
    <MainPageContainer>
      <LeftBar>
        <SprintList />
      </LeftBar>
      <RightBar>
        <TasktHeader />
        <RightItemBar>
          <TaskList />
        </RightItemBar>
      </RightBar>
    </MainPageContainer>
  );
};

export default SprintPage;
