import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const secciones = [
  {
    key: 'alcalde',
    titulo: 'ALCALDE',
    color: '#ffe600',
    contenido: (
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image="/img/autoridades/alcalde.jpg"
              alt="Alcalde"
              sx={{
                width: '100%',
                maxWidth: 300,
                borderRadius: 2,
                mx: 'auto',
                boxShadow: 3,
                background: '#fff'
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              Alvaro Labraña Opazo
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {/* Información adicional del alcalde */}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    ),
  },
  {
    key: 'concejo',
    titulo: 'CONCEJO MUNICIPAL',
    color: '#3498db',
    contenido: (
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ p: 2, alignItems: 'center', bgcolor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={`/img/concejal${i}.jpg`}
                  alt={`Concejal ${i}`}
                  sx={{
                    width: 120,
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    mb: 2,
                    background: '#fff'
                  }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Nombre Concejal {i}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  Breve descripción o cargo.
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
  },
 
];

export default function Municipio() {
  const [openSection, setOpenSection] = useState('alcalde');
  const [showGroupPhoto, setShowGroupPhoto] = useState(false);

  return (
    <Box sx={{ bgcolor: '', minHeight: '100vh', py: { xs: 2, md: 4 }, px: { xs: 1, md: 0 } }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto', mb: 3 }}>
        <Grid container spacing={2}>
          {secciones.map((sec) => (
            <Grid item xs={12} sm={6} key={sec.key}>
              <Box
                sx={{
                  bgcolor: openSection === sec.key ? sec.color : '#2980b9',
                  color: openSection === sec.key ? '#003242' : '#fff',
                  p: 2,
                  fontWeight: 'bold',
                  fontSize: { xs: 18, md: 22 },
                  letterSpacing: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderRadius: 1,
                  mb: 1,
                  transition: 'background 0.2s',
                }}
                onClick={() => setOpenSection(openSection === sec.key ? null : sec.key)}
              >
                {sec.titulo}
                {openSection === sec.key ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <AddIcon fontSize="large" />
                )}
              </Box>
              <Collapse in={openSection === sec.key}>
                <Box sx={{ bgcolor: '#fff', borderRadius: 2, mb: 2 }}>
                  {sec.contenido}
                </Box>
              </Collapse>
            </Grid>
          ))}
        </Grid>
      </Box>

      {}
      <Box sx={{
        maxWidth: 900,
        mx: 'auto',
        mb: 4,
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: 2,
        p: { xs: 1, sm: 2, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#003242', fontWeight: 'bold', textAlign: 'center' }}>
          Equipo Municipal
        </Typography>
        <CardMedia
          component="img"
          image="/img/autoridades/portada-concejo-2024-2028.jpg"
          alt="Foto Grupal Municipalidad"
          sx={{
            width: '100%',
            maxWidth: 700,
            borderRadius: 2,
            objectFit: 'cover',
            boxShadow: 3
          }}
        />
      </Box>
    </Box>
  );
}