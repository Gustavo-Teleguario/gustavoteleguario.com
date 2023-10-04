import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


const bioBullets = [
    {
        emoji: '☕',
        text: 'I love coffee',
        link:"https://espressocoffeeguide.com/gourmet-coffee/coffees-of-the-americas/guatemala-coffee/"
    },
    {
        emoji: '🌎',
        text: 'based in Germany',
        link:"https://www.kassel.de/buerger/kunst_und_kultur/documenta.php"
    },
    {
        emoji: "💼",
        text: "Software developer at the University of Kassel",
        link:"https://www.uni-kassel.de/eecs/"
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
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '4rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
                {bioBullets.map((bio, index) => (
                    <li key={index}>
                        <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
                    </li>
                ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}