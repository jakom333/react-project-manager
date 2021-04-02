import React, { useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import moment from 'moment';
import TaskList from '../../components/taskPageContent/taskList/TaskList';
import TasktHeader from '../../components/taskPageContent/taskHeader/TaskHeader';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import RightItemBar from '../../components/taskPageContainer/rightItemBar/RightItemBar';
import SprintListSideBar from '../../components/taskPageContent/sprintListSideBar/SprintListSideBar';

const TasksPage = () => {
  // const [filter, setFilter] = useState('');
  // const { projectId } = useLocation();
  // const { sprintId } = useParams();

  // const project = useSelector(state =>
  //   state.projects.find(project => project._id === projectId),
  // );
  // const sprint = useSelector(state =>
  //   state.sprints.find(sprint => sprint._id === sprintId),
  // );

  // const handleInput = e => {
  //   setFilter(e.target.value);
  // };

  // function getDates(startDate, endDate) {
  //   const dateArray = [];
  //   let currentDate = moment(startDate);
  //   const stopDate = moment(endDate);
  //   while (currentDate <= stopDate) {
  //     dateArray.push(moment(currentDate).format('MMM Do'));
  //     currentDate = moment(currentDate).add(1, 'days');
  //   }
  //   return dateArray;
  // }
  // const dateArr = getDates(sprint.startDate, sprint.endDate);

  return (
    <MainPageContainer>
      <LeftBar>
        <SprintListSideBar />
      </LeftBar>
      <RightBar>
        <TasktHeader
        // handleInput={handleInput}
        // title={sprint.title}
        // id={sprint._id}
        // dateArr={dateArr}
        />
        <RightItemBar>
          <TaskList />
        </RightItemBar>
      </RightBar>
    </MainPageContainer>
  );
};

export default TasksPage;
