import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
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
    /*{
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },*/

    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    },
    {
        name: 'Art Gallery', // New link for Art Gallery
        to: '/art-gallery', // Route to the Art Gallery component
        active: 'art-gallery' // Active state for the Art Gallery
    }
]

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}} fontSize={'1.5rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'}
                         className={`${(link.active === active && !link.type) && Style.active}
                          ${link.active === active && !link.type ? Style.largeFont : ''} ${link.active === active && !link.type ? Style.floatingText : ''}`}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '1rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}