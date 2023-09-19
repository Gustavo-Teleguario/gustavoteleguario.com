import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid, Typography} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box  marginTop={'7em'}>
            <Box sx={{ width: '80%'}} marginLeft={'3em'}>
                <Typography variant="h3" gutterBottom>
                    Welcome to my Portfolio
                </Typography>
                <Typography style={{fontSize: '25px'}} variant="body1" gutterBottom>
                    "I'm delighted to have you visit my digital portfolio. Here, I showcase several projects in the form of
                    short videos. These represent some of my successful endeavors developed during my studies. They span various
                    technologies and programming languages I've mastered throughout my education. Enjoy watching, and remember to
                    reach out if you have any questions. Feel free to contact me for further insights into my work.
                </Typography>
            </Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock  videoLink={project.videoLink} source={project.source} title={project.title} image={project.image} href={project.hRef} text={project.bio} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};