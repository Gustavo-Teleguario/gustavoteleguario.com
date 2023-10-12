import React, {useState, useRef} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import HALO from 'vanta/dist/vanta.halo.min'

export default function BaseLayout() {
    const [isBoolean, setBoolean] = useState(false);
    let [darkMode, setDarkMode] = useState(true);
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    function handleToggleDarkMode() {
        if (!vantaEffect && darkMode) {
            setVantaEffect(HALO({
                el: myRef.current,
                minWidth: 100.00,
                backgroundColor: 0x0,
            }))
            setBoolean(true);
        } else if (darkMode && vantaEffect) {
            setVantaEffect(vantaEffect.destroy())
            setBoolean(false);
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
        <Box ref={myRef} className={darkMode ? Style.dark : myRef.current}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'205vh'}
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

