import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {Typography} from '@mui/material';
import albums from '../../data/albums.json';
import './ArtGallery.css'; // Import the CSS file

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
        <div className="art-gallery-container">
            <Typography variant="h3" gutterBottom style={{ color: '#a0dbef' }}>
                Where Computer Science Meets Creativity
            </Typography>
            <Typography style={{ fontSize: '25px', textAlign: 'left', color: 'white' }} variant="body1" gutterBottom>
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
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gridAutoRows: 'minmax(300px, auto)',
                    gap: '4rem',
                    rowGap: '6rem',
                    justifyItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                {albums.map((album, albumIndex) => (
                    <div key={albumIndex} style={{ cursor: 'pointer', width: '100%', height: '300px', color: 'white' }}>
                        <Typography
                            variant="h5"
                            align="center"
                            style={{
                                marginBottom: '2rem',
                                color: '#9fe1f4',
                                fontFamily: 'Roboto, sans-serif',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                letterSpacing: '2px'
                            }}
                        >
                            {album.title}
                        </Typography>
                        <div onClick={() => openLightbox(album.images, 0)} style={{ height: '100%' }}>
                            <img src={album.images[0].imgSrc} alt={album.title}
                                 style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </div>
                ))}
            </div>

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
        </div>
    );
};

export default ArtGallery;