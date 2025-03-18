import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {Box, Typography} from '@mui/material';
import albums from '../../data/albums.json';
import './ArtGallery.css';


const ArtGallery = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [currentAlbumImages, setCurrentAlbumImages] = useState([]);

    const openLightbox = (albumImages, index) => {
        setCurrentAlbumImages(albumImages);
        setPhotoIndex(index);
        setIsOpen(true);
    };


    return (
        <Box className="art-gallery-container" sx={{padding: {xs: '1em', md: '8em'}}}>
            <Typography variant="h3" gutterBottom sx={{color: '#71d2e4', fontSize: {xs: '2rem', md: '3rem'}}}>
                Where Computer Science Meets Creativity
            </Typography>
            <Typography variant="body1" gutterBottom sx={{
                fontSize: {xs: '1rem', md: '1.5rem'},
                textAlign: 'justify',
                color: 'white',
                width: '100%'
            }}>

                Welcome and thank you for visiting my "Art Gallery" portfolio. In this section, you'll discover my
                drawings and oil paintings that showcase my artistic journey. While pursuing my studies in computer
                science, creativity and art have remained my passionate companions. I cherish the moments I spend
                painting and drawing in my free time—it's truly a passion I deeply enjoy.
                My artistic endeavors reveal my exceptional eye for detail and my love for creative expression. This
                natural inclination toward visual precision and creativity is precisely why I deliberately chose
                Computer Graphics as my elective specialization in my Informatics studies. Through both traditional art
                and digital design, I explore the beautiful intersection between technical precision and artistic
                freedom.
                Each piece in this collection represents not just an artwork, but a moment where technical understanding
                enhances artistic vision—where the analytical mind of a computer scientist meets the soul of an artist.
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(auto-fill, minmax(150px, 1fr))',
                        md: 'repeat(auto-fill, minmax(300px, 1fr))'
                    },
                    gap: '4rem',
                    rowGap: '6rem',
                    justifyItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                {albums.map((album, albumIndex) => (
                    <Box key={albumIndex}
                         sx={{cursor: 'pointer', width: '100%', height: {xs: '150px', md: '300px'}, color: 'white'}}>
                        <Typography
                            variant="h5"
                            align="center"
                            sx={{
                                marginBottom: '2rem',
                                color: '#9fe1f4',
                                fontFamily: 'Roboto, sans-serif',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                letterSpacing: '2px',
                                fontSize: {xs: '1rem', md: '1.5rem'}
                            }}
                        >
                            {album.title}
                        </Typography>
                        <Box onClick={() => openLightbox(album.images, 0)} sx={{height: '100%'}}>
                            <img src={album.images[0].imgSrc} alt={album.title}
                                 style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}/>
                        </Box>
                    </Box>
                ))}
            </Box>

            {isOpen && (
                <Lightbox
                    mainSrc={currentAlbumImages[photoIndex].imgSrc}
                    nextSrc={currentAlbumImages[(photoIndex + 1) % currentAlbumImages.length].imgSrc}
                    prevSrc={currentAlbumImages[(photoIndex + currentAlbumImages.length - 1) % currentAlbumImages.length].imgSrc}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + currentAlbumImages.length - 1) % currentAlbumImages.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % currentAlbumImages.length)
                    }
                    imageTitle={currentAlbumImages[photoIndex].title}
                    images={currentAlbumImages.map(art => art.imgSrc)}
                />
            )}
        </Box>
    );
};

export default ArtGallery;