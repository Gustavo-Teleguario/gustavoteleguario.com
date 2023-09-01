import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function PortfolioBlock(props) {
    /** image kann man hier setzen, wenn man es wieder braucht.*/
    const {videoLink, source, title} = props;
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
             marginTop={'5rem'}>
            <Container>
                <div className="ratio ratio-16x9">
                    <iframe
                        src={videoLink}
                        title="YouTube video"
                        allowFullScreen
                    ></iframe>
                </div>
            </Container>

            {/*<Box component={'img'} src={image} alt={'mockup'}/> */}
            <h1 style={{fontSize: '2rem'}}>{title}</h1>
            <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                 alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>

                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
                </Box>
            </Box>
        </Box>
    );
}

export default PortfolioBlock;