import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import './TypewriterEffect.css';

const TypewriterEffect = ({ text, delay = 100, infinite = false }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else if (infinite) {
            const resetTimeout = setTimeout(() => {
                setCurrentText('');
                setCurrentIndex(0);
            }, 2000); // Retraso antes de reiniciar la escritura
            return () => clearTimeout(resetTimeout);
        }
    }, [currentIndex, delay, infinite, text]);

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: '80px',
                padding: '1rem',
                backgroundColor: 'rgb(70,72,77)',
                borderRadius: '8px',
                color: '#fff',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                position: 'relative',
            }}
        >
            <Typography
                variant="h5"
                component="p"
                sx={{
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    borderRight: '0.15em solid orange',
                    animation: 'blink-caret 0.75s step-end infinite',
                }}
            >
                {currentText}
            </Typography>
        </Box>
    );
};

export default TypewriterEffect;