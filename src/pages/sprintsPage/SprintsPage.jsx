import React, { useEffect } from 'react';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import SprintsListSide from '../../components/sprintsPageContent/sprintsListSide/SprintsListSide';

import RightItemBar from '../../components/taskPageContainer/rightItemBar/RightItemBar';
import ProjectSideBar from '../../components/sprintsPageContent/projectSideBar/ProjectSideBar';

import { container } from '../../container.module.css';
import axios from 'axios';
import { useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';

const SprintsPage = () => {
  const token = useSelector(state => state.auth.token.accessToken);
  const match = useRouteMatch();

  console.log(match.params.projectId);

  useEffect(() => {
    axios
      .get(`https://sbc-backend.goit.global/sprint/${match.params.projectId}`, {
        headers: { Authorization: token },
      })
      .then(data => console.log(data));
  }, [match.params.projectId]);

  return (
    <div className={container}>
      <MainPageContainer>
        <LeftBar>
          <ProjectSideBar />
        </LeftBar>
        <RightBar>
          <RightItemBar>
            <SprintsListSide />
          </RightItemBar>
        </RightBar>
      </MainPageContainer>
    </div>
  );
};

export default SprintsPage;
