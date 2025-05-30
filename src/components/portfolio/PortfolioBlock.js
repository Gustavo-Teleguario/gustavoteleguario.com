import React from 'react';
import {Box, Typography, Divider} from "@mui/material";
import {Card, CardContent, CardMedia, CardActions, Button} from '@mui/material';
import {info} from "../../info/Info";

function PortfolioBlock(props) {
    const {image, videoLink, mainImage, source, title, href, text} = props;

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
             marginTop={'5em'}>
            <Card sx={{
                width: {xs: '90%', sm: '80%', md: '645px'},
                boxShadow: 'lg',
                margin: '0 auto'
            }}>
                <CardMedia
                    component="img"
                    image={mainImage}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: {xs: '200px', sm: '300px', md: '400px'}
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <a href={href} target="_blank" rel="noreferrer">
                            {Array.isArray(image) ? (
                                image.map((imgSrc, index) => (
                                    <img key={index} src={imgSrc} alt={`icon-${index}`} width="50" height="50"
                                         style={{margin: '0 5px'}}/>
                                ))
                            ) : (
                                <img src={image} alt="icon" width="50" height="50" style={{margin: '0 5px'}}/>
                            )}
                        </a>
                    </Typography>
                    <Typography variant="h5" component="div" textAlign="center"
                                sx={{fontSize: {xs: '1.5rem', md: '2.5rem'}}}>
                        {title}
                    </Typography>
                    <Divider sx={{marginY: '1rem',
                        borderBottomWidth: '2px',
                        borderColor: info.baseColorText}}/>
                    <Typography variant="body2" sx={{fontSize: {xs: '1rem', md: '1.25rem'}, textAlign: 'justify'}}>
                        {text}
                    </Typography>

                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        href={videoLink}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            backgroundColor: '#1976d2',
                            borderRadius: '8px',
                            padding: '0.5em 1.5em',
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        Video
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            borderColor: '#085cf4',
                            color: '#0434f6',
                            borderRadius: '8px',
                            padding: '0.5em 1.5em',

                        }}
                    >
                        Source
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default PortfolioBlock;