import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid, Typography} from "@mui/material";
import {info} from "../../info/Info";
import mocktra from "../../img/Mock-tra.png";
import mocDemostratortra from "../../img/Mock-Up-Dem-tra.PNG";
import moc3DInteriorCar from "../../img/3D-ModellingTransparent.PNG";
import PortfolioMockUp from "./PortfolioMockUp";

const projects = [
    {
        image: mocktra,
        source: "https://github.com/Gustavo-Teleguario/portfolio-page",
        title: "React Portfolio"
    },
    {
        image: mocDemostratortra,
       // source: "https://github.com/Gustavo-Teleguario/portfolio-page",
        title: "React Demonstrator"
    },
    {
        image: moc3DInteriorCar,
        source: "https://drive.google.com/file/d/12OFFc-Ts_9HhL4i9CcZxngLTB7Ta9Ej1/view?usp=sharing",
        title: "Blender 3D Interior Car"
    }
];

export default function Portfolio() {
    return (
        <Box marginTop={'7em'} maxHeight={'400vh'}>
            <Box sx={{width: { xs: '90%', md: '80%' }}} marginLeft={{ xs: '1em', md: '3em' }}>
                <Typography variant="h3" gutterBottom style={{color: info.baseColorText}} fontSize={{ xs: '2rem', md: '3rem' }}>
                    Welcome to my Portfolio
                </Typography>
                <Typography variant="body1" gutterBottom sx={{fontSize: { xs: '1rem', md: '1.5rem' }, textAlign: 'justify'}}>
                    "I'm delighted to have you visit my digital portfolio. Here, I showcase several projects in the form
                    of short videos. These represent some of my successful endeavors developed during my studies. They span
                    various technologies and programming languages I've mastered throughout my education. Enjoy watching, and
                    remember to reach out if you have any questions. Feel free to contact me for further insights into my work.
                </Typography>
            </Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock videoLink={project.videoLink} source={project.source} title={project.title}
                                        image={project.image} href={project.hRef} text={project.bio}/>
                    </Grid>
                ))}
                <Box sx={{width: { xs: '90%', md: '80%' }}} marginLeft={{ xs: '1em', md: '3em' }} marginTop={'5em'}>
                    <Typography variant="h3" gutterBottom style={{color: info.baseColorText}} fontSize={{ xs: '2rem', md: '3rem' }}>
                        Mockups
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{fontSize: { xs: '1rem', md: '1.5rem' }}}>
                        Here you can find some examples of my projects in Mockup form as well.
                    </Typography>
                    <Grid container display={'flex'} justifyContent={'revert'}>
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
}