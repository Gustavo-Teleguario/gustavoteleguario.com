import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import {Box} from "@mui/material";
import {CardActions} from "@mui/joy";
import IconLink from "./IconLink";

export let colors = ["#3980c0", "#45bbbb","#3980c0"];
export let colorsMockUp = ["#6c29f5", "#e8eeee","#6c29f5"];

function PortfolioBlock(props) {
    const {image, videoLink, source, title, href, text} = props;

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
             marginTop={'5em'}>
            <Card variant="solid"
                  color="neutral"
                  invertedColors={false} sx={{width: { xs: '100%', md: 645 }, boxShadow: 'lg'}}>
                <CardOverflow>
                    <AspectRatio variant="outlined"
                                 ratio="4/3" sx={{minWidth: { xs: '100%', md: 350 }}}>
                        <iframe
                            src={videoLink}
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <a href={href} target="_blank" rel="noreferrer">
                            <img src={image} alt="unity" width="80" height="80"/>
                        </a>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Typography variant="h1" component="h1" sx={{fontSize: { xs: '1.5rem', md: '2.5rem' }, marginBottom: '20px'}}>
                            {title}
                        </Typography>
                        <Typography sx={{fontSize: { xs: '1rem', md: '1.25rem' }, textAlign: 'justify'}}>
                            {text}
                        </Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box fontSize={{ xs: '1rem', md: '1.5rem' }} p={1} border={'2px solid white'} borderRadius={'25px'}
                         style={{
                             background: `-webkit-linear-gradient(180deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`
                         }}>
                        <IconLink link={source} title={'Reference'} icon={'fa fa-code'}/>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
}

export default PortfolioBlock;