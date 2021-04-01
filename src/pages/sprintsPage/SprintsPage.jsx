import React from 'react';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import SprintsListSide from '../../components/sprintsPageContent/sprintsListSide/SprintsListSide';

import RightItemBar from '../../components/taskPageContainer/rightItemBar/RightItemBar';
import ProjectSideBar from '../../components/sprintsPageContent/projectSideBar/ProjectSideBar';

import { container } from '../../container.module.css';
// import axios from 'axios';
// import { useRouteMatch } from 'react-router';
// import { useSelector } from 'react-redux';
// import { fetchSprints } from '../../redux/sprints/sprints-operations';

const SprintsPage = () => {
  // const token = useSelector(state => state.auth.token.accessToken);
  // const match = useRouteMatch();
  // const [sprints, setSprints] = useState([]);

  // // console.log(match.params.projectId);
  // useEffect(() => {
  //   fetchSprints(match.params.projectId);
  //   axios
  //     .get(`https://sbc-backend.goit.global/sprint/${match.params.projectId}`, {
  //       headers: { Authorization: token },
  //     })
  //     .then(data => setSprints([...data.data.sprints]));
  // }, [match.params.projectId]);

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
