import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import {colorsMockUp} from "./PortfolioBlock";

function PortfolioMockUp(props) {

    const {source, title, image} = props;

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box component={'img'} src={image}/>
            <h1 style={{fontSize: '2rem'}} >{title}</h1>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                 alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
                {source &&
                    <Box p={1.5} border={'2px solid white'} borderRadius={'25px'}  style={{
                        background: `-webkit-linear-gradient(180deg, ${colorsMockUp[0]}, ${colorsMockUp[1]}, ${colorsMockUp[2]})` // Button Color
                    }}>
                        <IconLink link={source} title={'Project Details'} icon={'fa fa-code'}/>
                    </Box>}
            </Box>
        </Box>
    );
}

export default PortfolioMockUp