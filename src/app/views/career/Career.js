import React, { useEffect, useState } from "react";
import TitleAnimation from "./titleAnimation/titleAnimation";
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import CareerStepper from "./careerStepper/CareerStepper";
import { steps } from '@data/steps';
import { Typography } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import Try from "./try/try";


function Career() {
    const matches = useMediaQuery('(min-width:600px)');
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => setScrollPosition(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <Container sx={{ maxWidth: '100% !important', padding: '0px !important', display: 'flex', flex: 1, flexDirection: 'column', }}>
            <section
                style={{
                    position: 'static',
                    backgroundSize: `${(window.outerHeight - scrollPosition) / 5}%`,
                    minHeight: `${(window.outerHeight - scrollPosition) / 2}px`,
                    maxWidth: 'none',
                    width: '100vw',
                    backgroundImage: 'linear-gradient(145deg, rgba(17,61,165,1) 0%, rgba(0,0,0,0.9652193641128326) 50%, rgba(94,23,163,1) 100%)',
                    padding: '0px !important',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    transition: '0.2s linear',
                }}>
                <TitleAnimation />
            </section>
            <section
                style={{ padding: 24 }}
            >
                <CareerStepper />
            </section>
            <section>
                <Try />
            </section>
        </Container>
    );
}

export default Career;
