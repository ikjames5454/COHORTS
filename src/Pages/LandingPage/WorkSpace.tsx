import React,{ useEffect, useState } from 'react'
import { useSelector } from 'react-redux'; 
import { RootState } from '../../store';
import Sidebar from '../Sidebar/Sidebar';
import Cohort from '../Internal/WorkSpace/Cohort';
import Instructors from '../Instructors/Instructors';


export let showCohort: boolean, setShowCohort: (value: boolean) => void;


const WorkSpace = () => {
  [showCohort, setShowCohort] = useState(true);

  const numberOfCount = useSelector( (state: RootState) => state.users.cohortCount);
  console.log("numberOfCount: ",numberOfCount);

  useEffect(() => {
    console.log('showCohort', showCohort);
  }, [showCohort]); 

  

  return (
    <div className='flex flex-col gap-24 md:flex-row w-full items-start'>
      <Sidebar/>
      {showCohort ? (numberOfCount < 0 ? <Cohort /> : <Instructors onCreateCohort={()=>null} />): null}
      </div>
  )
}

export default WorkSpace