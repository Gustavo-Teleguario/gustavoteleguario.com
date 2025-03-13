import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import ArtGallery from './artgallery/ArtGallery'; // Import the new component
import {Route, Routes} from "react-router-dom";
import {Box, Grid, useMediaQuery, useTheme} from "@mui/material";


export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);

    function handleClick() {
        setDarkMode(!darkMode);
    }

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box className={darkMode ? Style.dark : Style.light} sx={{
            width: '100%', // Vollbild-Breite
            padding: isMobile ? '1rem' : '2rem', // Unterschiedliche Polsterung für mobile und Desktop-Ansicht
            boxSizing: 'border-box' // Stellen Sie sicher, dass Padding und Border in der Breite enthalten sind
        }}>
            <Grid container
                  display={'flex'}
                  minHeight={'100vh'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
            >
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleClick}/>
                </Grid>
                <Grid item flexGrow={1}>
                    <Routes>
                        <Route exact path={'/'} element={<Home/>}/>
                        <Route exact path={'/about'} element={<About/>}/>
                        <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                        <Route path="/art-gallery" element={<ArtGallery />} /> {/* Add this new route */}
                    </Routes>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                         py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                        <p>created with &hearts; by <a href={'https://github.com/Gustavo-Teleguario'}>Maynor
                            Teleguario</a></p>
                        <p>&copy; 2023</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

