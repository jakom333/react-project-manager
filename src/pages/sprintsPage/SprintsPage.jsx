import React from 'react';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';

import RightItemBar from '../../components/taskPageContainer/rightItemBar/RightItemBar';
import ProjectSideBar from '../../components/sprintsPageContent/projectSideBar/ProjectSideBar';
import SprintsList from '../../components/sprintsPageContent/sprintsList/SprintsList';


const SprintsPage = () => {

    return (
       <div>
         <MainPageContainer>
           <LeftBar>
             <ProjectSideBar/>
           </LeftBar>
           <RightBar>
             <RightItemBar>
              <SprintsList/>
             </RightItemBar>
           </RightBar>
         </MainPageContainer>
       </div>
    );

}

export default SprintsPage;

