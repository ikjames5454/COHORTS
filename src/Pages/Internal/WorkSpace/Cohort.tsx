import React,{ useState } from 'react'
import cloudImage from "../../../asset/Image/roundImage.png"
import { useDispatch } from 'react-redux';
import { Button, Typography, Modal } from '@mui/material';
import { useMediaQuery, useTheme } from "@mui/material";
import CreateCohort from './CreateCohort';





const Cohort = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isCreateCohortMobile, setIsCreateCohortMobile] = useState(false);

    const handleCreateCohort = () => {
        if (isMobile) {
            setIsCreateCohortMobile(true); 
            handleOpen(); // Open the modal
        } else {
            setIsCreateCohortMobile(false); 
            handleOpen(); 
        }
    };  
   

  return (
    <div>
         <div className=' flex flex-col p-5 justify-center md:w-full h-fit relative md:justify-between'>
            {!isMobile && ( 
                <p className='text-2xl flex font-semibold font-serif pt-8'>Cohorts</p>
            )}
            
            <div className={isMobile ? 'flex flex-col justify-center items-center p-6':'flex flex-col justify-center items-center py-28'}>
                <img src={cloudImage} alt=''/>
                <Typography variant='h6' className={isMobile ? 'text-lg text-gray-900 font-bold': 'text-xl'}>
                    Empty Space
                </Typography>
                <Typography gutterBottom
                    style={{display:'flex', justifyContent: 'center', paddingLeft: 5, paddingRight:5, textAlign: 'center', maxWidth: 450}}>
                    No cohort has been created yet, let’s get you started by
                    clicking the button below.
                </Typography>
                <CreateCohort onCreateCohort={handleCreateCohort} />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className="modal-content">
                        <CreateCohort   onCreateCohort={handleCreateCohort} />
                    </div>
                </Modal> 
                 
                              
            </div>
            
        </div>

    </div>
  )
}

export default Cohort