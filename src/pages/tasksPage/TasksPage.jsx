import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import TaskList from '../../components/taskPageContent/taskList/TaskList';
import TaskHeader from '../../components/taskPageContent/taskHeader/TaskHeader';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import RightItemBar from '../../components/taskPageContainer/rightItemBar/RightItemBar';
import SprintListSideBar from '../../components/taskPageContent/sprintListSideBar/SprintListSideBar';
import { getSprintsSelector } from '../../redux/sprints/sprints-selectors';
// import { indexDayAction } from '../../redux/sprints/sprints-actions';

const TasksPage = () => {
  const { sprintId } = useParams();

  const sprints = useSelector(getSprintsSelector);
  const sprint = sprints.find(sprint => sprint._id === sprintId);
  function getDates(startDate, endDate) {
    const dateArray = [];
    let currentDate = moment(startDate);
    const stopDate = moment(endDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('MMM Do'));
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }
  const dateArr = getDates(sprint.startDate, sprint.endDate);

  return (
    <MainPageContainer>
      <LeftBar>
        <SprintListSideBar />
      </LeftBar>
      <RightBar>
        <TaskHeader title={sprint.title} id={sprint._id} dateArr={dateArr} />
        <RightItemBar>
          <TaskList />
        </RightItemBar>
      </RightBar>
    </MainPageContainer>
  );
};

export default TasksPage;

//
