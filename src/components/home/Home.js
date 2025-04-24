import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box, Typography} from "@mui/material";
import {info} from "../../info/Info";

const bioBullets = [
    {
        emoji: "💼",
        text: "Open for innovative projects",
        link: "https://www.youtube.com/@gustavoteleguario"
    },
    {
        emoji: "📧",
        text: "Maynor_Teleguario@hotmail.com",
        link: "mailto:Maynor_Teleguario@hotmail.com?subject=Let's work on something together!"
    }
];

export default function Home() {
    return (
        <Box
            display={'flex'}
            flexDirection={{xs: 'column', md: 'row-reverse'}}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={'calc(100vh - 175px)'}
            gap={{xs: '1rem', md: '2rem'}}
            padding={{xs: '1rem', md: '2rem'}}
        >
            <Box
                className={classNames(Style.avatarContainer, Style.shadowed)}
                sx={{
                    width: {xs: '250px', sm: '300px', md: '450px'}, // Responsive width
                    height: {xs: '250px', sm: '300px', md: '450px'}, // Responsive height
                    borderRadius: '50%',
                    border: `2px solid transparent`,
                    background: info.gradient,
                    backgroundSize: '200% 200%',
                    animation: 'gradientAnimation 3s ease infinite',
                    '@keyframes borderColorAnimation': {
                        '0%': { borderColor: info.baseColor },
                        '50%': { borderColor: 'transparent' },
                        '100%': { borderColor: info.baseColor },
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    className={Style.avatar}
                    component={'div'}
                    sx={{
                        width: 'calc(100% - 10px)',
                        height: 'calc(100% - 10px)',
                        borderRadius: '50%',
                        backgroundImage: `url(${me})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Box>
            <Box textAlign={{xs: 'center', md: 'left'}}>
                <h1>Hi, I'm <span style={{
                    background: info.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>{info.firstName}</span><span className={Style.hand}>🤚</span>
                </h1>
                <h2> {info.position}.</h2>
                <Box component={'ul'} p={'0.8rem'}>
                    {bioBullets.map((bio, index) => (
                        <li key={index}>
                            <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
                        </li>
                    ))}
                </Box>
                <Box
                    display={'flex'}
                    gap={{xs: '1rem', md: '1.5rem'}}
                    justifyContent={'center'}
                    fontSize={{xs: '1.5rem', md: '2.5rem'}}
                >
                    {info.socials.map((social, index) => (
                        <Box key={index} display="flex" flexDirection="column" alignItems="center">
                            <SocialIcon link={social.link} icon={social.icon} label={social.label}/>
                            <Typography variant="caption" fontSize="1rem" mt={1}>
                                {social.label.toUpperCase()}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}