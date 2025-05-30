import React, {useState} from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import ArtGallery from './artgallery/ArtGallery';
import {Route, Routes} from 'react-router-dom';
import {Box, Grid, useMediaQuery, useTheme} from '@mui/material';

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


            <Box sx={{
                width: '100%',
                padding: '0rem',
            }}>
                <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Box>

            <Grid item xs={12} flexGrow={1} width="100%" sx={{
                borderRadius: '8px',
                padding: '0rem',
            }}>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/portfolio' element={<Portfolio/>}/>
                    <Route path='/art-gallery' element={<ArtGallery/>}/>
                </Routes>
            </Grid>
        </Box>
    );
}