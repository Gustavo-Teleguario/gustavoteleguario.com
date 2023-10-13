import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid, Typography} from "@mui/material";
import {info} from "../../info/Info";
import mocktra from "../../img/Mock-tra.png"
import PortfolioMockUp from "./PortfolioMockUp";

const projects = [
    {
        image: mocktra,
        source: "https://github.com/Gustavo-Teleguario/portfolio-page",
        title: "React Portfolio"
    },
]

export default function Portfolio() {
    return (
        <Box marginTop={'7em'} >
            <Box sx={{width: '80%'}} marginLeft={'3em'}  >
                <Typography variant="h3" gutterBottom style={{color: info.baseColorText}}>
                    Welcome to my Portfolio
                </Typography>
                <Typography style={{fontSize: '25px'}} variant="body1" gutterBottom>
                    "I'm delighted to have you visit my digital portfolio. Here, I showcase several projects in the form
                    of
                    short videos. These represent some of my successful endeavors developed during my studies. They span
                    various
                    technologies and programming languages I've mastered throughout my education. Enjoy watching, and
                    remember to
                    reach out if you have any questions. Feel free to contact me for further insights into my work.
                </Typography>
            </Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock videoLink={project.videoLink} source={project.source} title={project.title}
                                        image={project.image} href={project.hRef} text={project.bio}/>
                    </Grid>
                ))}
                <Box sx={{width: '80%'}} marginLeft={'3em'} marginTop={'5em'}>
                    <Typography variant="h3" gutterBottom style={{color: info.baseColorText}}>
                        Mockups
                    </Typography>
                    <Typography style={{fontSize: '25px'}} variant="body1" gutterBottom>
                        Here you can find some examples of my projects in Mockup form as well.
                    </Typography>
                    <Grid container display={'flex'} justifyContent={'center'}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <PortfolioMockUp image={project.image} source={project.source} title={project.title}/>
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Grid>

        </Box>
    );
};