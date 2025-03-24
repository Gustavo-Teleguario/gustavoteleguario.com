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
        <Box display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'}
                 style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
                 borderRadius={'20%'} p={'0.3rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '4rem'}}/>
            <Box>
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
                <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
                    {info.socials.map((social, index) => (
                        <Box key={index} display="flex" flexDirection="column" alignItems="center">
                            <SocialIcon link={social.link} icon={social.icon} label={social.label}/>
                            <Typography variant="caption" fontSize="1rem" mt={1}>
                                {social.label.toUpperCase()} {/* Text unter der Icon */}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}