import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text, link} = props;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{fontSize: '1rem', lineHeight: '1.5'}}>
            <Box component={'span'} aria-label="flag"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}
            </Box>
            {text}
        </a>
    );
}

export default EmojiBullet;