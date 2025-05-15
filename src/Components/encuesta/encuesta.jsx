import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PollIcon from '@mui/icons-material/Poll';

const encuestas = [
  {
    titulo: 'Encuesta Deportiva',
    descripcion: 'Participa y cuéntanos tus gustos y actividades deportivas favoritas.',
    color: 'linear-gradient(135deg, #2196f3 60%, #21cbf3 100%)',
    textoColor: '#fff',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform', 
    arrowColor: '#fff',
  },
  {
    titulo: 'Encuesta Cambio Climático',
    descripcion: 'Ayúdanos a conocer tu percepción sobre el cambio climático y sus impactos.',
    color: 'linear-gradient(135deg, #43a047 60%, #aeea00 100%)',
    textoColor: '#fff',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform',
    arrowColor: '#fff',
  },
];

const Encuesta = () => (
  <Box sx={{ my: 4, px: { xs: 1, sm: 2, md: 4 }, maxWidth: 1200, mx: 'auto', textAlign: 'center' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
      <PollIcon sx={{ color: '#1976d2', fontSize: 36, mr: 1 }} />
      <Typography
        variant="h4"
        fontWeight="bold"
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
          textAlign: 'center',
        }}
      >
        Encuestas Ciudadanas
      </Typography>
    </Box>
    <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center" alignItems="stretch">
      {encuestas.map((encuesta, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex' }}>
          <Box
            data-aos="fade-up"
            data-aos-duration="1500"
            sx={{
              background: encuesta.color,
              borderRadius: 4,
              boxShadow: '0 4px 24px 0 rgba(33,150,243,0.10)',
              p: { xs: 2, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              minHeight: { xs: 140, sm: 170, md: 180 },
              height: '100%',
              width: '100%',
              transition: 'transform 0.2s, box-shadow 0.2s',
              m: { xs: 1, md: 2 }, // Margen extra entre tarjetas
              '&:hover': {
                transform: 'translateY(-8px) scale(1.03)',
                boxShadow: '0 8px 32px 0 rgba(33,150,243,0.18)',
              },
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                color: encuesta.textoColor,
                mb: 1,
                letterSpacing: 1,
                textShadow: '1px 1px 6px #0006',
              }}
            >
              {encuesta.titulo}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: encuesta.textoColor,
                mb: 2,
                opacity: 0.95,
                fontWeight: 500,
              }}
            >
              {encuesta.descripcion}
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
              href={encuesta.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontWeight: 'bold',
                fontSize: 14,
                px: 2,
                borderRadius: 2,
                background: 'rgba(0,0,0,0.18)',
                color: encuesta.textoColor,
                boxShadow: 'none',
                '&:hover': {
                  background: 'rgba(0,0,0,0.28)',
                  color: encuesta.textoColor,
                },
              }}
            >
              Responder
            </Button>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Encuesta;