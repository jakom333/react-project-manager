import React from 'react';
import MainPageContainer from '../../components/taskPageContainer/mainPageContainer/MainPageContainer';
import LeftBar from '../../components/taskPageContainer/leftBar/LeftBar';
import RightBar from '../../components/taskPageContainer/rightBar/RightBar';
import SprintsListSide from '../../components/sprintsPageContent/sprintsListSide/SprintsListSide';

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
              <SprintsListSide/>
             </RightItemBar>
           </RightBar>
         </MainPageContainer>
       </div>
    );

}

export default SprintsPage;

