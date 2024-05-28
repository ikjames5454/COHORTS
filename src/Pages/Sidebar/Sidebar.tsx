import React,{ useState }  from 'react'
import { setShowCohort } from '../LandingPage/WorkSpace'
import Mobile from '../Mobile/Mobile'
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, Menu, MenuItem, OutlinedInput, Select } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { FiBriefcase } from "react-icons/fi";
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery, useTheme } from "@mui/material";
import { Theme } from '@mui/material/styles'; // Add Theme import
import { SelectChangeEvent } from '@mui/material';


const Sidebar = () => {
    const [activeButton, setActiveButton] = useState(0); // Initial active button is 0
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
    const navigate = useNavigate();


    const handleClick = (index: number) => {
        setActiveButton(index);
        switch (index) {
            case 0:
                // Perform the action for cohorts
                console.log("Navigate to cohorts");
                setShowCohort(true);
                break;
            case 1:
                // Perform the action for programs
                console.log("Navigate to programs");
                setShowCohort(false);
                
                break;
            case 2:
                // Perform the action for instructors
                console.log("Navigate to instructors");
                setShowCohort(false);
                break;
            case 3:
                // Perform the action for learners
                console.log("Navigate to learners");
                setShowCohort(false);
                break;
            default:
                break;
        }
    };
     
       

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    
    const handleOptionSelect = (option: string) => {
      setSelectedOption(option);
      handleMenuClose();
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [personName, setPersonName] = React.useState<string[]>([]);


    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value as string[];
        setPersonName(value);
    };

  return (
    <div className='w-[300px] h-4/5 relative '>
    <div className='flex flex-col pt-6 gap-4 items-align '>
        {isMobile ? (
            <Button
                id="menu-button"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{
                    textTransform: 'none',
                    color: '#008EEF',
                    fontSize: 16,
                    lineHeight: '27px',
                    fontFamily: 'DM Sans',
                    fontWeight: '700',
                }}
            >
                {/* Menu */}
            </Button>
        ) : (
            <>
                <Button
                    variant='text'
                    sx={{
                        textTransform: 'none',
                        color: activeButton === 0 ? '#008EEF' : 'black',
                        '&:hover': {
                            backgroundColor: '#F6FCFF',
                            color: '#008EEF',
                        },
                        fontSize: 26,
                        lineHeight: '27px',
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        
                    }}
                    onClick={() => handleClick(0)}
                    startIcon={<GroupIcon />}
                >
                    Cohorts
                </Button>
                <Button
                    variant='text'
                    sx={{
                        textTransform: 'none',
                        color: activeButton === 1 ? '#008EEF' : 'black',
                        '&:hover': {
                            backgroundColor: '#F6FCFF',
                            color: '#008EEF',
                        },
                        fontSize: 26,
                        lineHeight: '27px',
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        paddingLeft: '18px',
                        marginLeft:"12px"
                    }}
                    onClick={() => handleClick(1)}
                    startIcon={<ImportContactsTwoToneIcon />}
                >
                    Programs
                </Button>
                <Button
                    variant='text'
                    sx={{
                        textTransform: 'none',
                        color: activeButton === 2 ? '#008EEF' : 'black',
                        '&:hover': {
                            backgroundColor: '#F6FCFF',
                            color: '#008EEF',
                        },
                        fontSize: 26,
                        lineHeight: '27px',
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        paddingLeft: '18px',
                        marginLeft:"22px"
                    }}
                    onClick={() => handleClick(2)}
                    startIcon={<FiBriefcase />}
                >
                    Instructors
                </Button>
                <Button
                    variant='text'
                    sx={{
                        textTransform: 'none',
                        color: activeButton === 3 ? '#008EEF' : 'black',
                        '&:hover': {
                            textDecoration: 'none',
                            backgroundColor: '#F6FCFF',
                            color: '#008EEF',
                        },
                        fontSize: 26,
                        lineHeight: '27px',
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        paddingRight: '18px',
                        marginLeft:"22px"
                    }}
                    onClick={() => handleClick(3)} 
                    startIcon={<PersonIcon />}
                >
                    Learners
                </Button>
            </>
        )}
        <Mobile />
    </div>
</div>
  )
}

export default Sidebar