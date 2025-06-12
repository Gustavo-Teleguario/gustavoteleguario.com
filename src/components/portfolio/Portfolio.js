import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Divider, Grid, Typography} from "@mui/material";
import {info} from "../../info/Info";


export default function Portfolio() {
    return (
        <Box marginTop={'1em'} maxHeight={'400vh'}>

            <Box sx={{width: {xs: '90%', md: '80%'}, textAlign: 'center', margin: '0 auto'}}>
                <Typography variant="h3" gutterBottom style={{color: info.baseColorText}}
                            fontSize={{xs: '2rem', md: '3rem'}}>
                    My Projects
                </Typography>
                <Divider sx={{
                    borderBottomWidth: '2px',
                    borderColor: info.baseColorText,
                    margin: '1em 0'
                }}/>
                <Typography variant="body1" gutterBottom
                            sx={{fontSize: {xs: '1rem', md: '1.5rem'}, textAlign: 'justify'}}>
                    Here, you can explore my projects and even grab a copy from my GitHub. For me, it's not just about
                    writing code.
                    It's about really thinking through problems and finding the best way to build solutions using
                    technology.
                    This is where I put my heart, knowledge, and creativity into action.
                    My strong skills mean I can solve problems in new ways and create working software. But it's more
                    than just tech.
                    These projects also show how I plan, work with others, communicate clearly, and love to keep
                    learning.

                    Take a look around!
                </Typography>
            </Box>
            <Divider sx={{
                marginY: '2em', width: '80%', marginX: 'auto', borderBottomWidth: '2px',
                borderColor: info.baseColorText,
            }}/>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock videoLink={project.videoLink} source={project.source} title={project.title}
                                        mainImage={project.mainImage}
                                        image={project.image} text={project.bio}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}