import React, { useEffect, useState } from "react";
import TitleAnimation from "./titleAnimation/titleAnimation";
import CareerStepper from "./careerStepper/CareerStepper";
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';

import { steps } from '@data/steps';
import { useStep } from '@context/StepContext';
import { Typography } from "@mui/material";
import { Visibility } from "@mui/icons-material";


function Career() {
    const matches = useMediaQuery('(min-width:600px)');
    const { activeStep } = useStep();


    return (
        <Container sx={{ maxWidth: '100% !important', padding: '0px !important', display: 'flex', flex: 1, flexDirection: 'column', }}>
            <Container
                sx={{
                    maxWidth: '100% !important',
                    backgroundImage: 'linear-gradient(145deg, rgba(17,61,165,1) 0%, rgba(0,0,0,0.9652193641128326) 50%, rgba(94,23,163,1) 100%)',
                    padding: '0px !important',
                    display: 'flex',
                    flex: 1,
                    minHeight: 400,
                    flexDirection: 'column',
                }}>
                <TitleAnimation />
            </Container>
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flex: 1,
                    maxHeight: 450,
                    flexDirection: 'column',
                    marginTop: matches ? '80px' : '40px'
                }}>
                <CareerStepper />
            </Container>
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    flex: 1,
                    maxHeight: 450,
                    flexDirection: 'column',
                    marginTop: matches ? '80px' : '40px'
                }}>
                {steps.map((step, index) => {
                    const description = step.description.map((e) => e.excerpt)
                    return (
                        <Container
                            maxWidth='sm'
                            sx={{
                                display: activeStep === index ? 'block' : 'none',
                                paddingBottom: '32px'

                            }}>
                            <Typography>
                                {step.label}
                            </Typography>
                            {description}
                        </Container>
                    )
                })}
            </Container>
        </Container>
    );
}

export default Career;
