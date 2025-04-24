import React, { useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import ArtGallery from './artgallery/ArtGallery';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        setDarkMode(!darkMode);
    }

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box className={darkMode ? Style.dark : Style.light} sx={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: isMobile ? '1rem' : '2rem',
            boxSizing: 'border-box'
        }}>
            <Grid container
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  flexGrow={1}
            >
                <Grid item xs={12}>
                    <Navbar darkMode={darkMode} handleClick={handleClick}   />
                </Grid>
                <Grid item xs={12} flexGrow={1} width="100%">
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/portfolio' element={<Portfolio />} />
                        <Route path='/art-gallery' element={<ArtGallery />} />
                    </Routes>
                </Grid>

            </Grid>
        </Box>
    );
}