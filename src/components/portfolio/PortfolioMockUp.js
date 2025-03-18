import React from 'react';
import {Box, Typography} from "@mui/material";
import {Card, CardContent, CardMedia, CardActions} from '@mui/material';
import IconLink from "./IconLink";

function PortfolioMockUp(props) {
    const {image, source, title} = props;

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginTop={'5em'}>
            <Card sx={{width: { xs: '100%', md: 645 }, boxShadow: 'lg'}}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{minWidth: { xs: '100%', md: 350 }}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontSize: { xs: '1.5rem', md: '2.5rem' }}}>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box fontSize={{ xs: '1rem', md: '1.5rem' }} p={1} border={'2px solid white'} borderRadius={'25px'}
                         style={{
                             background: `-webkit-linear-gradient(180deg, #6c29f5, #e8eeee, #6c29f5)`
                         }}>
                        <IconLink link={source} title={'Reference'} icon={'fa fa-code'}/>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
}

export default PortfolioMockUp;