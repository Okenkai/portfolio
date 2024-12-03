'use client'
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

const pages = [
    { title: 'Mon Parcours', link: 'career' },
    { title: 'Mes Projets', link: 'project' },
    { title: 'Mon CV', link: 'degree' },
    { title: 'Contact', link: 'mailto:alexandre.lc@hotmail.fr' }
];

function NavBar({ handleNavigation }) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [visible, setVisible] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#000',
                top: visible ? 0 : '-100px',
                transition: 'top 0.6s ease-out',
                height: 'calc(100vh - 90vh)'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            background: 'linear-gradient(145deg, rgba(94,23,163,1) 0%, rgba(255,105,180,1) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textDecoration: 'none',
                        }}
                    >
                        Portfolio
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            id="menu-appbar"
                            anchor='bottom'
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    sx={{
                                        backgroundColor: '#000',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        '&:hover': {
                                            backgroundImage: 'linear-gradient(145deg, rgba(17,61,165,1) 0%, rgba(0,0,0,0.9652193641128326) 50%, rgba(94,23,163,1) 100%)',
                                        },
                                    }}
                                    key={page.title}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        handleNavigation(page.link);
                                    }}>
                                    <Typography sx={{ color: '#fff' }}>{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Drawer>
                    </Box>
                    <StickyNote2Icon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Portfolio
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    handleNavigation(page.link);
                                }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
