import React from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {Box } from '@mui/material'
import {Menu,MenuItem, IconButton, Card} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';


const actionOption = [
  { title: 'Publish a poll' },
  { title: 'Schedule an event' },
  { title: 'Make an announcement' },
];
type StartDate = string | { $d: Date };

const InstructorCohortCard = () => {

  const formatDate = (date: StartDate): string => {
     
    if (typeof date === 'object' && '$d' in date) {
      return new Date(date.$d).toString().split(' ').slice(0, 4).join(' ');
    }
   
    return new Date(date).toString().split(' ').slice(0, 4).join(' ');
  };

   
  const users = useSelector( (state: RootState) => state.users.users);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
   
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  console.log("users: ",users);
  return (
    
    <div 
    className='relative right-[660px] w-[2145px] hidden md:block'
    
    >
    <Box overflow="auto" height={500} position="relative">
   {users.map((user,index)=> (
     <div>
         
   <div key={index} className='flex space-x-[1270px] h-24 pt-5'
   style={{border: '1px #F6FCFF', boxShadow: '0px 8px 16px 0px rgba(240, 249, 255, 0.5)', borderRadius: '8px'}}
   >
       <div className='ct flex space-x-5'>
           <img   className='w-20 md:w-12 h-20 md:h-12 rounded-lg' src={user.cohortAvatar} alt="images" />
           <div>
           <h1 className='flex font-sans font-bold text-xl'>
               {user.cohortName}
           </h1>
           <div className='flex space-x-10'>
           <h2  style={{fontFamily: 'DM Sans', color: '#1E323F', fontSize: '18px', fontWeight: '500', width: '150px'}}>
            {user.program}
           </h2>
           <div className='text-xl absolute left-[400px]'>
           <span className='icon text-gray-500'><PersonOutlinedIcon/> </span> 
           <span className='text-gray-600 text-xl'>
           25 Learners
           </span>
           </div>
           </div>
           </div>
   
       </div>
       <div className='text-xl text-gray-600 flex gap-10  absolute left-[500px] text-center'>
         <h1 className=' mt-3'> Created
         <span className='date ml-5'>
         {formatDate(user.startDate)}
         </span>
         </h1>
         <div>
          <IconButton onClick={handleClick}>
            <MoreVertIcon sx={{fontSize:"2.1rem"}}/>
          </IconButton>
         </div>
         <Menu
          id='menu'
          MenuListProps={{ 'aria-labelledby': 'long-button' }}
           anchorEl={anchorEl}
           open={open}
            onClose={handleClose}
          >
            {
              actionOption.map((option)=>(
                <MenuItem
                key={option.title}
                selected={option.title === 'Publish a poll'} 
                onClick={handleClose}
                >
                 {option.title}
                </MenuItem>
              ))
            }

          </Menu>
         {/* <div
         className='leading-3 text-4xl relative bottom-5 ' >
         <h1>.</h1>
         <h1>.</h1>
         <h1>.</h1>
       </div> */}

       </div>
   </div>
    {/* <div className='space h-5 bg-slate-50 mt-5 w-[1800px] mb-4 opacity-6'>

    </div> */}
    
   
    </div>
 ))}
  </Box>
</div>
)
}

 

export default InstructorCohortCard 