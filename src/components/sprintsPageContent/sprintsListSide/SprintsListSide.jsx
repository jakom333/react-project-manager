import React from 'react';
import SprintsHeader from '../sprintsHeader/SprintsHeader';
import SprintsList from "../sprintsList/SprintsList"
import conteiner from '../../../container.module.css'

const SprintsListSide = () => {

    return (
      <div className=''>
        <SprintsHeader/>
        <SprintsList/>
      </div>
    );

}

export default SprintsListSide;