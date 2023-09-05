import React from 'react';
import Svg from "../svg/Svg";
import {Box} from "@mui/material";


export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

    return (
        <Box fontSize={'1.5rem'}
             sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
            {
                darkMode ?
                    <span onClick={handleClick} aria-label="Full Moon" role="img" style={{fontSize: '2rem'}}>
                          <Svg icon="guitar" width="80" height="80"/>

                        </span>
                    :
                    <span onClick={handleClick} aria-label="New Moon" role="img" style={{fontSize: '2rem'}}>
                         <Svg icon="acousticGuitar" width="80" height="80"/>
                    </span>
            }
        </Box>
    )
}