import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { steps } from '@data/steps';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GroupIcon from '@mui/icons-material/Group';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const icons = {
    1: <SchoolIcon />,
    2: <HistoryEduIcon />,
    3: <GroupIcon />,
    4: <LaptopChromebookIcon />,
    5: <SmartphoneIcon />,
};

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'grey',
    zIndex: 1,
    width: 60,
    height: 60,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: 'linear-gradient(90deg, rgba(17,61,165,1) 0%, rgba(0,162,255,1) 60%)',
}));

const ConnectorLine = styled('div')(({ state }) => ({
    display: state ? 'none' : 'block',
    position: 'absolute',
    left: '50%',
    top: '100%',
    transform: 'translateY(-50%)',
    width: 3,
    backgroundColor: 'rgba(0,162,255,1)',
    height: '100%',
}));

export default function CareerStepper() {
    const refsIcon = useRef([]);

    useEffect(() => {
    }, []);

    const handleClickableIcon = (refIndex) => {
        const clickedIcon = refsIcon.current[refIndex];
        clickedIcon.style.animation = 'pulse 1s ease-in-out';
        clickedIcon.classList.add('flowing-gradient');

        setTimeout(() => {
            clickedIcon.style.animation = '';
            clickedIcon.classList.remove('flowing-gradient');
        }, 5000);

        console.log(refIndex);
    }

    return (
        <Box sx={{ position: 'relative', margin: '0 auto', width: '70%' }}>

            <Box sx={{ width: '100%' }}>
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    const isLastEl = index + 1 === steps.length;

                    return (
                        <Box
                            key={index}
                            data-index={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                minHeight: 120,
                            }}
                        >
                            <Box sx={{ position: 'relative', width: 60 }}>
                                <ColorlibStepIconRoot ref={(el) => (refsIcon.current[index] = el)} onClick={() => handleClickableIcon(index)}>
                                    {icons[index + 1]}
                                </ColorlibStepIconRoot>
                            </Box>

                            <ConnectorLine state={isLastEl} />
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}
