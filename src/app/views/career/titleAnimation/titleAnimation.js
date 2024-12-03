import React, { useEffect, useRef, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import useMediaQuery from '@mui/material/useMediaQuery';
import './styles.css';



function TitleAnimation() {
    const matches = useMediaQuery('(min-width:600px)');
    const [isHover, setIsHover] = useState(0);

    return (
        <Container
            sx={{
                maxWidth: 'fit-content',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <Typography
                    variant={matches ? "h2" : "h4"}
                    sx={{
                        fontFamily: 'monospace',
                        letterSpacing: '.1rem',
                        fontWeight: 1000,
                        background: 'linear-gradient(90deg, rgba(17,61,165,1) 0%, rgba(0,162,255,1) 60%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                    Le Programmeur
                </Typography>
                <Typography
                    variant={matches ? "h6" : "h7"}
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 800,
                        background: 'linear-gradient(90deg, rgba(17,61,165,1) 0%, rgba(0,162,255,1) 60%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontStyle: 'italic'
                    }}>
                    Une machine qui transforme le café en <Typography variant="span" sx={{
                        background: 'linear-gradient(145deg, rgba(94,23,163,1) 0%, rgba(255,105,180,1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontStyle: 'italic'
                    }}>code.</Typography>
                </Typography>

                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    height: matches ? 'unset' : '30%',
                    alignItems: matches ? 'unset' : 'end',
                }}>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: matches ? 'flex-start' : 'space-between',
                        marginTop: 1,
                    }}>
                        <Button
                            className="linkedinBtn"
                            sx={{ marginRight: matches ? '8px' : 'unset', width: matches ? 'unset' : '45%', borderColor: '#0a66c2' }}
                            variant="outlined"
                            href="https://linkedin.com/in/alexandre-le-carour-a73454180"
                            onMouseEnter={() => setIsHover(1)}
                            onMouseLeave={() => setIsHover(0)}
                        >
                            <LinkedInIcon sx={{ color: isHover === 1 ? '#fff' : '#0a66c2' }} />
                        </Button>
                        <Button
                            className="githubBtn"
                            sx={{ width: matches ? 'unset' : '45%', borderColor: '#763fc7' }}
                            variant="outlined"
                            href="https://github.com/Okenkai"
                            onMouseEnter={() => setIsHover(2)}
                            onMouseLeave={() => setIsHover(0)}
                        >
                            <GitHubIcon sx={{ color: isHover === 2 ? '#fff' : '#763fc7' }} />
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Container>
    );
}

export default TitleAnimation;