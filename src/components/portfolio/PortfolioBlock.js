import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import {Box} from "@mui/material";
import {CardActions} from "@mui/joy";
import IconLink from "./IconLink";


function PortfolioBlock(props) {

    const {image, videoLink, source, title,href,text} = props;

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
             marginTop={'5em'}>
            <Card variant="solid"
                  color="neutral"
                  invertedColors={false} sx={{width: 645, maxWidth: '100%', boxShadow: 'lg'}}>
                <CardOverflow>
                    <AspectRatio variant="outlined"
                                 ratio="4/3" sx={{minWidth: 350}}>
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
                        <h1 style={{fontSize: '2.5rem', marginBottom: '20px'}}>{title}</h1>
                        <Typography style={{fontSize: '20px'}}>{text}</Typography>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
                         alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>

                        <Button color="primary"
                                variant="outlined"
                                size="lg"
                        >
                            <IconLink link={source} title={'Reference'} icon={'fa fa-code'}/>
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>

    );
}

export default PortfolioBlock;