import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CssBaseline, Box, IconButton } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Noticias from './Components/Noticias/Noticias';
import Form from './Components/Formulario/Formulario';
import Mapa from './Components/Mapa/Mapa';
import Servicios from './Components/Servicios/Servicios';
import Contactos from './Components/Contactos/Contactos';
import Encuesta from './Components/Encuesta/Encuesta';
import Galeria from './Components/Galeria/Galeria';
import Comunidad from './Components/Comunidad/Comunidad';
import Municipio from './Components/municipio/Municipio';

function App() {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [darkMode, setDarkMode] = React.useState(true);

  const handleToggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          overflowX: 'hidden',
          bgcolor: darkMode ? '#023040' : '#f5f5f5',
          color: darkMode ? '#fff' : '#222',
          transition: 'background 0.3s, color 0.3s',
        }}
      >
        <CssBaseline />
        <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 2000 }}>
          <IconButton onClick={handleToggleDarkMode} color="inherit" sx={{ bgcolor: darkMode ? '#17475a' : '#e3f2fd' }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        <Header />
        <Box component="main" sx={{ flex: 1, mb: 4 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Noticias />
                  <Servicios />
                  <Encuesta />
                  <Form />
                  <Mapa />
                  <Galeria />
                </>
              }
            />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/municipio" element={<Municipio />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;

