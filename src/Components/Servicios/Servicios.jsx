import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardActions } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CampaignIcon from '@mui/icons-material/Campaign';

const servicios = [
  {
    imagen: '/public/img/taller.jpg',
    
  },
  { 
    imagen: '/img/WhatsAppImage2025-02-26at12.35.04.jpeg',
    enlace: 'https://portalweb.insico.cl/Cholchol/Permisos/'
  },
  {
    imagen: '/img/bec2.jpg',
    
  },
  {
    imagen: '/public/img/estudiantes.jpg',
   
  },
  {
    imagen: '/public/img/TALLER_CLIMATICO.jpg',
   
  },{
    
  imagen: '/public/img/R2.jpg'
  },
  {
    imagen: '/public/img/yv3.png',
    enlace: 'https://www.youtube.com/@MunicipalidaddeCholcholOficial/streams'
  },
];

const Servicios = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1500, once: false }); // Efecto cada vez que sube
  }, []);

  return (
    <Box sx={{ my: 4, px: { xs: 1, sm: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
        <CampaignIcon sx={{ color: '#1976d2', fontSize: 36, mr: 1 }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: '#1976d2',
            borderBottom: '3px solid #1976d2',
            pb: 0.5,
            letterSpacing: 2,
            bgcolor: '#e3f2fd',
            px: 2,
            borderRadius: 2,
            boxShadow: 1,
            textAlign: 'center'
          }}
        >
          Talleres y Anuncios
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 4, md: 6 }} >
        {servicios.map((servicio, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx} data-aos="fade-up">
            <Card
              sx={{
                cursor: 'pointer',
                boxShadow: 4,
                borderRadius: 3,
                overflow: 'hidden',  
                bgcolor: '#17475a', 
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 8,
                },
                m: { xs: 1, md: 2 },
              }}
            >
              <a
                href={servicio.enlace}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
              >
                <CardMedia
                  component="img"
                  image={servicio.imagen}
                  alt={servicio.titulo}
                  sx={{
                    width: '100%',
                    height: 320,
                    objectFit: 'contain',
                    background: '#222',
                  }}
                />
              </a>
              <CardActions sx={{ bgcolor: '#17475a', flexDirection: 'column', alignItems: 'flex-start', p: 2 }}>
                <Typography variant="h6" component="div" sx={{ mb: 1, color: '#fff' }}>
                  {servicio.titulo}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc' }}>
                  {servicio.descripcion}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Servicios;