import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GroupIcon from '@mui/icons-material/Group';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import SchoolIcon from '@mui/icons-material/School';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Typography } from '@mui/material';
import { useStep } from '@context/StepContext';
import useMediaQuery from '@mui/material/useMediaQuery';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'grey',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'grey',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient(90deg, rgba(17,61,165,1) 0%, rgba(0,162,255,1) 100%)', // Dégradé bleu à cyan
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient(90deg, rgba(94,23,163,1) 0%, rgba(255,105,180,1) 100%)', // Dégradé violet à rose
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'grey',
        borderRadius: 1,
    },
}));



const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'grey',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient(145deg, rgba(17,61,165,1) 0%, rgba(0,162,255,1) 100%)', // Dégradé bleu à cyan
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient(145deg, rgba(94,23,163,1) 0%, rgba(255,105,180,1) 100%)', // Dégradé violet à rose
    }),
}));



function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SchoolIcon />,
        2: <HistoryEduIcon />,
        3: <GroupIcon />,
        4: <LaptopChromebookIcon />,
        5: <SmartphoneIcon />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
            sx={{ cursor: 'pointer' }}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = [{ date: '2015', title: 'Baccalauréat' }, { date: '2016', title: 'Licence' }, { date: '2017', title: 'POP' }, { date: '2018', title: 'BTS' }, { date: '2020 - 2023', title: 'Master' }];

function CareerStepper() {
    const matches = useMediaQuery('(min-width:600px)');
    const { activeStep, handleStep } = useStep();

    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((step, index) => (
                    <Step key={`key-${index}`}>
                        <StepLabel
                            StepIconComponent={ColorlibStepIcon}
                            onClick={() => handleStep(index)}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'monospace',
                                    fontSize: matches ? 18 : 12,
                                    letterSpacing: '.1rem',
                                    fontWeight: 1000,
                                    color: '#fff',
                                    textDecoration: 'none',
                                }}>{step.date}</Typography>
                        </StepLabel>
                        <Typography
                            sx={{
                                textAlign: 'center'
                            }}
                        >{step.title}</Typography>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}

export default CareerStepper;
