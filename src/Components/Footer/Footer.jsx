import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: '#1976d2',
        color: '#fff',
        pt: { xs: 2, md: 3 },
        pb: 1,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <LocationOnIcon sx={{ fontSize: 32, color: '#fff', mb: 0.5 }} />
            <Typography
              variant="body1"
              sx={{
                letterSpacing: 2,
                fontWeight: 400,
                color: '#fff',
                textAlign: 'center',
                fontSize: { xs: 13, md: 16 },
                lineHeight: 1.2,
              }}
            >
              JOSÉ JOAQUÍN<br />PÉREZ, 449,<br />CHOLCHOL
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <MailIcon sx={{ fontSize: 32, color: '#fff', mb: 0.5 }} />
            <Typography
              variant="body1"
              sx={{
                letterSpacing: 2,
                fontWeight: 400,
                color: '#fff',
                textAlign: 'center',
                fontSize: { xs: 13, md: 16 },
                wordBreak: 'break-all',
                lineHeight: 1.2,
              }}
            >
              OFICINADEPARTES<br />@MUNICHOLCHOL.CL
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <InfoIcon sx={{ fontSize: 32, color: '#fff', mb: 0.5 }} />
            <Typography
              variant="body1"
              sx={{
                letterSpacing: 2,
                fontWeight: 400,
                color: '#fff',
                textAlign: 'center',
                fontSize: { xs: 13, md: 16 },
                lineHeight: 1.2,
              }}
            >
              452 734200
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" gutterBottom sx={{ color: '#fff', fontSize: 12 }}>
        © 2025 Municipalidad de Cholchol. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" sx={{ color: '#fff', fontSize: 12 }}>
        <Link href="#" color="inherit" underline="hover">
          Política de Privacidad
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit" underline="hover">
          Términos y Condiciones
        </Link>
      </Typography>
    </Box>
  );
}
