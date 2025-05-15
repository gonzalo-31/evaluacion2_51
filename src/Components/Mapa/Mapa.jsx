import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const Mapa = () => (
  <Box
    sx={{
      my: 6,
      px: { xs: 1, sm: 2, md: 4 },
      maxWidth: 900,
      mx: 'auto',
      textAlign: 'center',
    }}
  >
    <Paper
      elevation={6}
      sx={{
        p: { xs: 2, sm: 4 },
        borderRadius: 4,
        background: 'linear-gradient(135deg, #e3f2fd 60%, #fff 100%)',
        boxShadow: '0 8px 32px 0 rgba(33,150,243,0.10)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          gap: 1,
        }}
      >
        <RoomIcon sx={{ color: 'primary.main', fontSize: 40 }} />
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: 'primary.main',
            letterSpacing: 1,
            textShadow: '1px 1px 8px #b2dfdb',
            fontSize: { xs: 22, sm: 28, md: 34 },
          }}
        >
          Ubicación Municipalidad de Cholchol
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          color: 'text.secondary',
          fontSize: { xs: 15, sm: 17 },
          maxWidth: 600,
        }}
      >
        Visítanos en nuestra casa consistorial. Aquí puedes encontrar atención ciudadana, oficinas municipales y orientación para tus trámites.
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: 700,
          height: { xs: 250, sm: 350, md: 400 },
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 3,
          border: '2px solid #90caf9',
        }}
      >
        <iframe
          title="Mapa Municipalidad de Cholchol"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.941469732624!2d-72.6400006846907!3d-38.60111197961373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e1c6e2e8b9e3%3A0x6f5e2e2e2e2e2e2e!2sMunicipalidad%20de%20Cholchol!5e0!3m2!1ses-419!2scl!4v1684100000000!5m2!1ses-419!2scl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          mt: 3,
          color: 'primary.dark',
          fontWeight: 500,
        }}
      >
        Dirección: Av. Principal 123, Cholchol, Región de la Araucanía
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: 'text.secondary',
        }}
      >
        Horario de atención: Lunes a Viernes, 8:30 a 14:00 hrs
      </Typography>
    </Paper>
  </Box>
);

export default Mapa;




