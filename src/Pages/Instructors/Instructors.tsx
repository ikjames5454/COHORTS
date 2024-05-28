import React,{ useEffect, useState,Fragment} from 'react'
import { useSelector } from 'react-redux'; 
import { Container, TextField, InputAdornment, Button, IconButton, MenuItem, Menu, Paper, useTheme, Typography, useMediaQuery, Card, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { Formik, Form, Field } from 'formik';
import { searchUser } from '../../Util/UserReducer';
import { useNavigate } from "react-router-dom";
import CreateCohort from '../Internal/WorkSpace/CreateCohort';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InstructorCohortCard from './InstructorCohortCard';

export let showCohort: boolean, setShowCohort: (value: boolean) => void;

interface FormValues {
  search: string;
}

interface CreateCohortProps {
  onCreateCohort: () => void;
}

const actionOption = [
  { title: 'Publish a poll' },
  { title: 'Schedule an event' },
  { title: 'Make an announcement' },
];

const Instructors: React.FC<CreateCohortProps> = ({ onCreateCohort}) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
   const dispatch = useDispatch();

   const search = (values: FormValues) => {
    console.log('Searching for:', values.search);
    dispatch(searchUser(values.search));
  };

  const navigate = useNavigate();

  const handleActionClick = (route: string) => {
    navigate(route);
  };

  const handleCreateCohort = () => {
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div  className='flex flex-col w-[100%]'>
      <Container maxWidth={false} style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}>
      <p className=' hidden md:flex md:text-3xl flex font-semibold font-serif '>
              Cohorts
            </p>
            <div  className='flex flex-col gap-6 md:gap-0 md:flex-row w-full justify-between items-center mt-2'>
       <div className='hidden sm:block'>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={(values: FormValues, actions) => {
              search(values);
              actions.setSubmitting(false);
            }}
          >
            {() => (
              <Form>
                <Field
                  id="search"
                  type="text"
                  name="search"
                  placeholder="search"
                  className={`w-[700px] pl-16 py-4 text-2xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg h-13`}
                />
                <SearchIcon
                  sx={{ fontSize: '2.8rem', opacity: '0.3' }}
                  className='icon font-thin relative right-[686px]'
                />
              </Form>
            )}
          </Formik>
        </div > 
        <div className='flex justify-between gap-6 w-[350px] md:w-auto items-center md:px-80'>
          <CreateCohort onCreateCohort={onCreateCohort} />
          <Button
          variant='outlined' 
          disableRipple 
          endIcon={<IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>} 
          sx={{ color: '#142E70'}} 
          style={{display: 'flex', padding:'12px 12px 12px 19px', alignSelf: 'center', fontFamily: 'DM Sans', textTransform: 'none', color: '#142E70', fontSize: '14px', fontWeight: '700',
            border: '1.5px solid #AAB7DB', borderRadius: '8px',}}
          >
            More Action
          </Button>
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
          </div> 
          </div>  
            <div className='block md:hidden'>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={(values: FormValues, actions) => {
              search(values);
              actions.setSubmitting(false);
            }}
          >
            {() => (
              <Form>
                <Field
                  id="search"
                  type="text"
                  name="search"
                  placeholder="search"
                  className={`w-[300px]  py-4 pl-12 text-xl border border-gray-700 text-gray-700 outline-none mt-3 px-5 rounded-lg h-11`}
                />
                <SearchIcon
                  sx={{ fontSize: '1.8rem', opacity: '0.3' }}
                  className='icon font-thin relative right-[280px]'
                />
              </Form>
            )}
          </Formik>
        </div > 
      </Container>
      <Container sx={{marginTop:"50px"}}  >
        <InstructorCohortCard/>
      </Container>

      </div>
  )
}

export default Instructors