import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



function PortfolioBlock(props) {

    /** image kann man hier setzen, wenn man es wieder braucht.*/
    const {videoLink, source, title, image, href} = props;
    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Card sx={{ maxWidth: 345, justifyContent: 'center'}}  >
                <CardMedia sx={{ height: 140 }}>
                    <div className="ratio ratio-21x9">
                        <iframe
                            src={videoLink}
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">

                        <a href={href} target="_blank" rel="noreferrer">
                            <img src={image} alt="unity" width="80" height="80"/>
                        </a>

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h1 style={{fontSize: '2rem'}}>{title}</h1>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                         alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>

                        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Box>

    );
}

export default PortfolioBlock;