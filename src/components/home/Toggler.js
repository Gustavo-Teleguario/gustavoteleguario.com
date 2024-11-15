import React from 'react';
import Svg from "../svg/Svg";
import {Box} from "@mui/material";


export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

    return (
        <Box fontSize={'1rem'}
             sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
            {
                darkMode ?
                    <span onClick={handleClick} aria-label="Full Moon" role="img" style={{fontSize: '2rem'}}>
                <Svg icon="germanFlag" width="80" height="80"/>

                </span>
                    :
                    <span onClick={handleClick} aria-label="New Moon" role="img" style={{fontSize: '2rem'}}>
                         <Svg icon="guatemalaFlag" width="80" height="80"/>
                    </span>

            }
        </Box>
    )
}