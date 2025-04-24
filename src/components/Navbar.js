import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import {info} from "../info/Info";

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

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component={'nav'}
             width={'100%'}
             display={'flex'}
             flexDirection={'column'}
             alignItems={'center'}>
            <Box component={'ul'}
                 display={'flex'}
                 flexDirection={isMobile ? 'column' : 'row'}
                 justifyContent={'center'}
                 alignItems={'center'}
                 gap={isMobile ? '0.5rem' : {xs: '1rem', sm: '2rem', md: '4rem'}}
                 fontSize={isMobile ? '1rem' : {xs: '1.2rem', sm: '1.5rem', md: '1.8rem'}}>

                {links.map((link, index) => (
                    <Box key={index}
                         component={'li'}
                         className={`${(link.active === active && !link.type) && Style.active}
            ${link.active === active && !link.type ? Style.largeFont : ''} ${link.active === active && !link.type ? Style.floatingText : ''}`}
                         sx={{
                             border: `2px solid transparent`,
                             borderRadius: '4px',
                             padding: isMobile ? '0.3rem' : '0.5rem',
                             background: link.active === active ? `linear-gradient(90deg, ${info.gradient})` : 'transparent',
                             animation: link.active === active ? 'borderAnimation 3s infinite' : 'none',
                             '@keyframes borderAnimation': {
                                 '0%': { borderColor: info.baseColor },
                                 '50%': { borderColor: 'transparent' },
                                 '100%': { borderColor: info.baseColor },
                             },
                             backgroundSize: '200% 200%',
                             transition: 'all 0.3s ease',
                             width: isMobile ? '100%' : 'auto',
                             textAlign: 'center',
                         }}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
            </Box>
            <Box mt={isMobile ? '1rem' : '0'}>
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </Box>
        </Box>
    );
}