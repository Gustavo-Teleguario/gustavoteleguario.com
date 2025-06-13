import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {Box, Typography, Divider, Grid} from '@mui/material';
import albums from '../../data/albums.json';
import {info} from '../../info/Info';
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
        <Box marginTop={'1em'} maxHeight={'400vh'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box sx={{width: {xs: '90%', md: '80%'}, textAlign: 'center', margin: '0 auto'}}>
                <Typography variant="h3" gutterBottom sx={{color: info.baseColorText, fontSize: {xs: '2rem', md: '3rem'}}}>
                    Where Ideas Take Form
                </Typography>
                <Divider sx={{
                    borderBottomWidth: '2px',
                    borderColor: info.baseColorText,
                    margin: '1em 0'
                }}/>
                <Typography variant="body1" gutterBottom
                            sx={{fontSize: {xs: '1rem', md: '1.5rem'}, textAlign: 'justify' }}>
                    Welcome to my Art Gallery. Here, I showcase my drawings and paintings, many of which were paid
                    commissions through my hobbies that helped finance my studies. These works demonstrate my discipline,
                    my drawing talent with an exceptional eye for detail, and my ability to execute projects from start to finish.
                </Typography>
            </Box>
            <Divider sx={{
                marginY: '2em', width: '80%', marginX: 'auto', borderBottomWidth: '2px',
                borderColor: info.baseColorText,
            }}/>
            <Grid container spacing={2} justifyContent={'center'} sx={{width: {xs: '100%', sm: '90%', md: '80%'}}}>
                {albums.map((album, albumIndex) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={albumIndex}>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Typography
                                variant="h5"
                                align="center"
                                sx={{
                                    marginBottom: '1rem',
                                    color: info.baseColorText,
                                    fontFamily: 'Roboto, sans-serif',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                    letterSpacing: '1px',
                                    fontSize: {xs: '1rem', md: '1.5rem'}
                                }}
                            >
                                {album.title}
                            </Typography>
                            <Box
                                onClick={() => openLightbox(album.images, 0)}
                                sx={{width: '100%', height: {xs: '120px', sm: '150px', md: '200px'}}}
                                className="gallery-item-clickable"
                            >
                                <img src={album.images[0].imgSrc} alt={album.title}
                                     style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}}/>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>

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