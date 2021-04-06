import React, { useState } from 'react';
import TaskList from '../../components/taskPageContent/taskList/TaskList';
import TaskHeader from '../../components/taskPageContent/taskHeader/TaskHeader';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import RightItemBar from '../../components/taskPageContainer/rightItemBar/RightItemBar';
import SprintListSideBar from '../../components/taskPageContent/sprintListSideBar/SprintListSideBar';

const TasksPage = () => {
  const [taskDate, setTaskDate] = useState(Date.now());
  return (
    <MainPageContainer>
      <LeftBar>
        <SprintListSideBar />
      </LeftBar>
      <RightBar>
        <TaskHeader setTaskDate={setTaskDate} />
        <RightItemBar>
          <TaskList taskDate={taskDate} />
        </RightItemBar>
      </RightBar>
    </MainPageContainer>
  );
};

export default TasksPage;
