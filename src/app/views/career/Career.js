import React, { useEffect, useState } from "react";
import TitleAnimation from "./titleAnimation/titleAnimation";
import CareerStepper from "./careerStepper/CareerStepper";
import CareerHistory from "./careerHistory/CareerHistory";
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';


function Career() {
    const matches = useMediaQuery('(min-width:600px)');
    const [careerHistoryIsHover, setCareerHistoryIsHover] = useState(false);

    return (
        <Container sx={{ padding: '0px !important', display: 'flex', flex: 1, flexDirection: 'column', }}>
            <Container
                sx={{
                    padding: '0px !important',
                    display: 'flex',
                    flex: 1,
                    minHeight: 400,
                    flexDirection: 'column',
                    backgroundImage: 'linear-gradient( 136deg, rgb(33, 115, 242) 0%, rgb(0, 0, 0) 50%, rgb(64, 47, 124) 100%)'
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
                onMouseEnter={() => setCareerHistoryIsHover(true)}
                onMouseLeave={() => setCareerHistoryIsHover(false)}
                sx={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    minHeight: 500,
                    marginTop: matches ? '80px' : '40px',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <CareerHistory careerHistoryIsHover={careerHistoryIsHover} />
            </Container>
        </Container>
    );
}

export default Career;
