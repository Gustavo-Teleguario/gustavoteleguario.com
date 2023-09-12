import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {
    return (
        <Box>
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