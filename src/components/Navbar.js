import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { info } from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Art Gallery',
        to: '/art-gallery',
        active: 'art-gallery'
    }
];

export default function Navbar({ darkMode, handleClick }) {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component={'nav'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box component={'ul'} display={'flex'} flexDirection={isMobile ? 'column' : 'row'} justifyContent={'center'} alignItems={'center'}
                 gap={isMobile ? '1rem' : { xs: '2rem', md: '8rem' }} fontSize={isMobile ? '1.2rem' : '1.5rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'}
                         className={`${(link.active === active && !link.type) && Style.active}
                          ${link.active === active && !link.type ? Style.largeFont : ''} ${link.active === active && !link.type ? Style.floatingText : ''}`}
                         sx={{ borderImageSource: info.gradient }}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{ padding: '1rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
            <Box mt={isMobile ? 'auto' : '0'}>
                <Toggler darkMode={darkMode} handleClick={handleClick} />
            </Box>
        </Box>
    );
}