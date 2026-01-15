import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.jpg';
import classNames from 'classnames';
import SocialIcon from "./SocialIcon";
import {Box, Typography} from "@mui/material";
import {info} from "../../info/Info";
import TypewriterEffect from './TypewriterEffect';

export default function Home() {
    const elevatorPitch = "A person with a strong background who has turned every obstacle into an opportunity for growth. As a passionate software developer, I bring strong problem-solving skills, " +
        "team spirit, self-motivation, and a high level of adaptability. I communicate confidently in English, German, and Spanish – and thrive on every challenge.";

    return (
        <Box
            display={'flex'}
            flexDirection={{xs: 'column', md: 'row-reverse'}}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={'calc(100vh - 175px)'}
            gap={{xs: '1rem', md: '2rem'}}
            sx={{
                position: 'relative',
                top: '-80px',
            }}
        >
            <Box
                className={classNames(Style.avatarContainer, Style.shadowed)}
                sx={{
                    width: {xs: '200px', sm: '250px', md: '350px'},
                    height: {xs: '200px', sm: '250px', md: '350px'},
                    borderRadius: '50%',
                    border: `2px solid transparent`,
                    background: info.gradient,
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

            <Box textAlign={'center'} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: {xs: '100%', md: 'auto'},
            }}>
                <h1 style={{margin: 0, fontSize: 'clamp(1.5rem, 2.5vw, 3rem)'}}>
                    Hi, I'm{' '}
                    <span
                        style={{
                            background: info.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                {info.firstName} {info.lastName}!
            </span>
                </h1>
                <h2 style={{margin: 0, fontSize: 'clamp(1rem, 2vw, 2rem)'}}>
                    {info.position}.
                </h2>

                <Box
                    sx={{
                        width: {xs: '90%', sm: '80%', md: '700px'},
                        marginTop: {xs: '1rem', md: '1.5rem'},
                        marginBottom: {xs: '1.5rem', md: '2rem'},
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        mx: 'auto',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <TypewriterEffect
                        text={elevatorPitch}
                        delay={70}
                        infinite={true}
                        style={{
                            fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)', // Dynamische Schriftgröße
                        }}
                    />
                </Box>

                <Box
                    display={'flex'}
                    gap={{xs: '1rem', md: '1.5rem'}}
                    justifyContent={'center'}
                    fontSize={{xs: '1.2rem', md: '2rem'}}
                >
                    {info.socials.map((social, index) => (
                        <Box
                            key={index}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <SocialIcon
                                link={social.link}
                                icon={social.icon}
                                label={social.label}
                            />
                            <Typography
                                variant="caption"
                                fontSize="clamp(0.8rem, 1vw, 1rem)"
                                mt={1}
                            >
                                {social.label.toUpperCase()}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}