import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Formik, Form, ErrorMessage, Field, FieldProps } from 'formik'; 
import ImageDropZone from "./ImageDropZone";
import * as Yup from 'yup';
import { uploadImageToCloudinary } from '../../../Util/UploadToCloudinary';
import { RootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../Util/UserReducer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


interface FormValues {
    cohortName: string;
    description: string;
    program: string;
    startDate: string;
    endDate: string;
    cohortAvatar: string;
}

const initialValues: FormValues = {
    cohortName: "",
    description: "",
    program: "",
    startDate: "", 
    endDate: "", 
    cohortAvatar: ""
}

const validationSchema = Yup.object().shape({
    cohortName: Yup.string().required('Cohort name is required'),
    description: Yup.string().required('Description is required'),
    program: Yup.string().required('Program is required'),
    startDate: Yup.date().required('Start date is required').nullable(), 
    endDate: Yup.date()
        .required('End date is required')
        .nullable()
        .test(
            'is-greater',
            'End date must be later than start date',
            function (value) {
                const { startDate } = this.parent;
                return !startDate || !value || new Date(value) > new Date(startDate);
            }
        ), 
});

  interface CreateCohortProps {
    onCreateCohort: () => void;
   
  }

const CreateCohort = ({onCreateCohort}: CreateCohortProps ) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values: FormValues) => {
        console.log('Submitted values:', values);
        onCreateCohort()
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            ...values,
        };
        dispatch(addUser(newUser));
        navigate("/workspace");
        handleClose()
    };

    return (
        <div>
            <Button onClick={handleOpen} 
                className='b pl md:block'
                sx={{ backgroundColor: "#008EEF", color: 'white', lineHeight: '24px', fontSize: '18px',
                textTransform: 'none', borderRadius: '8px', padding: '20px 34px',
                '&:hover': { backgroundColor: "#008EEF" }
                }}
                disableRipple
            >
                Create a cohort
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 6,
                    border: '1px solid #D0DCE4'
                }}
            >
                <div>
                    <Box sx={{
                        position: 'relative',
                        backgroundColor: 'white',
                        padding: '24px',
                        borderRadius: '8px',
                        width: '1050px',
                        boxShadow: 24,
                        paddingLeft: "54px",
                        paddingRight: "120px"
                    }}>
                        <Button onClick={handleClose} sx={{
                            position: 'absolute', right: 27, top: 0, fontSize: '25px', fontWeight: '400', color: "black"
                        }}>
                            x
                        </Button>

                        <Typography id="modal-modal-title" variant="h6" component="h2" className="text-4xl font-serif" style={{ fontFamily: 'IBM Plex Serif', fontSize: '24px', fontWeight: '600' }}>
                            Create a Cohort
                        </Typography>

                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            {({ values, setFieldValue, isValid, dirty }) => (
                                <Form>
                                    <div className='mt-10'>
                                        <label className='name text-xl'>Cohort Name</label>
                                        <Field
                                            className='w-[950px] py-5 text-2xl border border-gray-400 text-gray-700 outline-none mt-3 px-5 rounded-lg'
                                            type="text"
                                            id="cohortName"
                                            name="cohortName"
                                            placeholder='Ex Cohort'
                                        />
                                        <div style={{ color: "red", fontSize: "1.8rem" }}>
                                            <ErrorMessage name='cohortName' />
                                        </div>
                                    </div>
                                    <div className='mt-7 relative'>
                                        <label className='name text-xl'>Description</label>
                                        <Field
                                            as="textarea"
                                            className="w-[950px] h-48 py-4 text-2xl border border-gray-400 text-gray-700 outline-none mt-3 px-5 rounded-lg"
                                            id="description"
                                            name="description"
                                            placeholder="Ex A space for python developers"
                                        />
                                        <div style={{ color: "red", fontSize: "1.8rem" }}>
                                            <ErrorMessage name='description' />
                                        </div>
                                    </div>
                                    <div className='mt-7'>
                                        <label className='name text-xl'>Program</label>
                                        <Field
                                            as="select"
                                            className='w-[950px] py-5 text-xl border border-gray-400 text-gray-700 outline-none mt-3 px-5 rounded-lg bg-white'
                                            name="program"
                                            id="program"
                                        >
                                            <option value={""}></option>
                                            <option value={"Java"}>Java</option>
                                            <option value={"Python"}>Python</option>
                                            <option value={"Java_script"}>Java-Script</option>
                                        </Field>
                                        <div style={{ color: "red", fontSize: "1.8rem" }}>
                                            <ErrorMessage name='program' />
                                        </div>
                                    </div>
                                    <div className='flex mt-4 w-[80%] gap-4'>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <div>
                                                <p className='d text-xl font-semibold'>Start Date</p>
                                                <Field name="startDate">
                                                    {({ field, form }: FieldProps) => (
                                                        <DatePicker
                                                             className='d border-gray-500 border-solid'
                                                            value={field.value}
                                                            onChange={(date) => form.setFieldValue(field.name, date)}
                                                        />
                                                    )}
                                                </Field>
                                                <div style={{ color: "red", fontSize: "1.8rem" }}>
                                                    <ErrorMessage name='startDate' />
                                                </div>
                                            </div>
                                            <div>
                                                <p className='d text-xl font-semibold'>End Date</p>
                                                <Field name="endDate">
                                                    {({ field, form }: FieldProps) => (
                                                        <DatePicker
                                                        sx={{
                                                            '& .PrivateDateRangePicker': {
                                                                border: 'none', 
                                                                borderRadius: '4px', 
                                                                boxShadow: '0 0 0 1px #e2e8f0', 
                                                            },
                                                           
                                                        }}
                                                            value={field.value}
                                                            onChange={(date) => form.setFieldValue(field.name, date)}
                                                        />
                                                    )}
                                                </Field>
                                                <div style={{ color: "red", fontSize: "1.8rem" }}>
                                                    <ErrorMessage name='endDate' />
                                                </div>
                                            </div>
                                        </LocalizationProvider>
                                    </div>
                                    <div className='mt-7'>
                                        <label className='name text-xl'>Add a cohort Avatar</label>
                                        <div>
                                            <ImageDropZone
                                                onSelect={async (file) => {
                                                    const imageUrl = await uploadImageToCloudinary(file);
                                                    setFieldValue('cohortAvatar', imageUrl);
                                                }}
                                            />
                                            <div className='info flex gap-2 items-center mt-3'>
                                                <InfoOutlinedIcon sx={{ fontSize: "2.0rem" }} />
                                                <p className='opt text-xl'>You can do this later</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='opt flex space-x-3 justify-end py-5'>
                                        <Button variant='outlined'
                                            sx={{ color: '#008EEF', fontSize: '16px', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', textTransform: 'none', paddingTop: "10px", paddingBottom: "10px", paddingLeft: "25px", paddingRight: "25px" }} onClick={handleClose} >
                                            Cancel
                                        </Button>
                                        <Button type='submit' variant='contained'
                                            sx={{ color: 'white', fontSize: '20px', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', textTransform: 'none', backgroundColor: "blueViolet", paddingTop: "10px", paddingBottom: "10px" }} disabled={!(dirty && isValid)} >
                                            Create a Cohort
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </div>
            </Modal>
        </div>
    );
};

export default CreateCohort;
