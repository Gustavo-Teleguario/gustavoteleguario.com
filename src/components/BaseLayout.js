import React, {useState, useRef, useEffect} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import CELL from 'vanta/dist/vanta.cells.min'
import {useLocation} from "react-router-dom";

export default function BaseLayout() {
    const [isBoolean, setBoolean] = useState(false);
    let [darkMode, setDarkMode] = useState(true);
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        // Initialisieren des Vanta-Effekts
        if (!vantaEffect) {
            setVantaEffect(CELL({
                el: myRef.current,
                color1: 0x1e39b9,
                color2: 0x3484e3,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00
            }));
        }
        // Bereinigen beim Komponentenabbau
        return () => {
            if (vantaEffect) {
                setVantaEffect(vantaEffect.destroy());
            }
        };
    }, [vantaEffect]);

    function handleToggleDarkMode() {
        if (darkMode && vantaEffect) {
            setVantaEffect(CELL({
                el: myRef.current,
                color1: 0x1e39b9,
                color2: 0x3484e3,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00
            }))
            setBoolean(true)
            console.log("Condicion cumplida primer if");
            setDarkMode(false);
        } else if (!darkMode && vantaEffect) {
            setBoolean(false);
            console.log("Condicion cumplida");
            setVantaEffect(vantaEffect.destroy());
            setDarkMode(true);
        }
    }

    /*  function handleToggleDarkMode() {
          let oppositeOfCurrentDarkMode = !darkMode;
          localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
          setDarkMode(oppositeOfCurrentDarkMode);
      }*/

    /*  useEffect(() => {
          let detectedDarkMode = eval(localStorage.getItem('darkMode'));
          if (detectedDarkMode) {
              setDarkMode(detectedDarkMode);
          } else {
              localStorage.setItem('darkMode', 'false');
          }
      }, []);*/
    /*  const [vantaEffect, setVantaEffect] = useState(null)
      const myRef = useRef(null)
      useEffect(() => {
          if (!vantaEffect) {
              setVantaEffect(HALO({
                  el: myRef.current,
                  minWidth: 100.00,
                  backgroundColor: 0x0,
              }))
          }
          return () => {
              if (vantaEffect) vantaEffect.destroy()
          }
      }, [vantaEffect])*/

    return (
        <Box ref={myRef} className={darkMode ? Style.dark : myRef.current} minHeight={'100vh'}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                  justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={isBoolean} handleClick={handleToggleDarkMode}/>
                </Grid>
                <Grid item flexGrow={1}>
                    <Routes>
                        <Route exact path={'/'} element={<Home/>}/>
                        <Route exact path={'/about'} element={<About/>}/>
                        <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                    </Routes>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                         py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                        <p>created with &hearts; by <a href={'https://github.com/Gustavo-Teleguario'}>Maynor
                            Teleguario</a></p>
                        <p>&copy; 2023</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

