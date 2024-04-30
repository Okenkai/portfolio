import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { steps } from '@data/steps';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import StarsIcon from '@mui/icons-material/Stars';
import DescriptionIcon from '@mui/icons-material/Description';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './styles.css';

import { useStep } from '@context/StepContext';

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
            'linear-gradient( 136deg, rgb(33, 115, 242) 0%, rgb(0, 0, 0) 50%, rgb(64, 47, 124) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient(90deg, rgb(62, 65, 237) 0%, rgb(12, 237, 195) 100%)'
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <AutoStoriesIcon />,
        2: <LaptopChromebookIcon />,
        3: <StarsIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
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

function CareerHistory(props) {
    const { careerHistoryIsHover } = props;
    const [isHover, setIsHover] = useState(0);
    const [isExcerpt, setIsExcerpt] = useState(false);
    const [isAnimate, setIsAnimate] = useState(false);
    const { activeStep, handleStepNext, handleStepBack, handleStepReset } = useStep();
    const excerptInput = useRef(null);

    useEffect(() => {
        setIsAnimate(careerHistoryIsHover);
    }, [careerHistoryIsHover]);

    useEffect(() => {

        if (!isAnimate) {
            excerptInput.current.style.animation = 'unset';
            return;
        }
        excerptInput.current.style.animation = 'pop 0.3s ease-in 4';

    }, [isAnimate]);

    const handleExcerpt = () => {
        setIsExcerpt((prevIsExcerpt) => !prevIsExcerpt);
    }

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => {
                    const description = step.description.map((e) => e.excerpt)
                    return (
                        <Step key={step.label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                <Typography sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 800,
                                    color: '#fff',
                                    fontStyle: 'italic',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    {step.label}

                                    <DescriptionIcon
                                        ref={index === 0 ? excerptInput : null}
                                        className='btnExcerpt' onClick={handleExcerpt}
                                        sx={{
                                            width: '16px',
                                            color: '#edc112',
                                            cursor: 'pointer',
                                            visibility: activeStep === index ? 'visible' : 'collapse'
                                        }}
                                    />
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                {isExcerpt ? description : step.list}
                                <Box sx={{ mb: 2 }}>
                                    <div>
                                        <Button
                                            variant="outlined"
                                            className='btnNext'
                                            onClick={handleStepNext}
                                            onMouseEnter={() => setIsHover(1)}
                                            onMouseLeave={() => setIsHover(0)}
                                            sx={{
                                                mt: 1,
                                                mr: 1,
                                                borderColor: '#fff',
                                                color: isHover === 1 ? '#edce0d' : '#fff',
                                                fontFamily: 'monospace',
                                                fontWeight: 800,
                                            }}
                                        >
                                            {index === steps.length - 1 ? 'Me Contacter' : 'Suivant'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleStepBack}
                                            onMouseEnter={() => setIsHover(2)}
                                            onMouseLeave={() => setIsHover(0)}
                                            sx={{
                                                mt: 1,
                                                mr: 1,
                                                visibility: index === 0 ? 'collapse' : 'visible',
                                                color: isHover === 2 ? '#edce0d' : '#fff',
                                            }}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    )
                })}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleStepReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
export default CareerHistory;