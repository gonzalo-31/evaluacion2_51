import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Modal, IconButton } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const noticias = [
  {
    id: 1,
    titulo: 'Feria de Emprededores Locales',
    descripcion: 'Apoya a los emprendedores locales asistiendo a la feria que se realizará en la plaza principal.',
    fecha: '13 de mayo de 2025',
    imagen: '/img/feria.jpg',
  },
  {
    id: 2,
    titulo: 'Campaña de Vacunación Gratuita',
    descripcion: 'Se llevará a cabo una campaña de vacunación gratuita en el centro de salud municipal.',
    fecha: '01 de mayo de 2025',
    imagen: '/img/vacunas.jpg',
  },
  {
    id: 3,
    titulo: '159 familias de la comuna de Cholchol recibieron las llaves de sus viviendas definitivas',
    descripcion: 'Con una emotiva ceremonia en el gimnasio del Liceo municipal, James Mundell en la comuna de Cholchol, se realizó́ la entrega de llaves de 159 viviendas pertenecientes a las familias del comité́ “Los Copihues”, quienes, tras más de 10 años de espera, lograron concretar el sueño de la casa propia, recibiendo de manos de las autoridades, lideradas por el alcalde de la comuna, Álvaro Labraña y el Seremi de vivienda, Patricio Escobar, lo que serán sus nuevos hogares.',
    fecha: '25 de marzo de 2025',
    imagen: '/img/casa.jpg',
  },
  {
    id: 4,
    titulo: '📌¡Buenas noticias para la juventud de Cholchol! 🙌',
    descripcion: 'Hoy se escribe nuevo hito📣: Nuestro municipio suscribió un importante convenio denominando, “Compromiso joven” con el Instituto Nacional de la Juventud (INJUV), marcando un importante paso hacia la promoción de más y mejores oportunidades para las y los jóvenes de nuestra comuna. 🤝✨ Con este acuerdo, se busca construir una estrategia municipal de juventud que permita fomentar la participación de los jóvenes en nuestra comuna, acercando herramientas concretas para el desarrollo integral de la juventud cholcholina. 💡🎓🎨',
    fecha: '15 de abril de 2025',
    imagen: '/img/jovenes.jpg',
  },
  {
    id: 5,
    titulo: 'Una trayectoria de orgullo y dedicación',
    descripcion: '🔵 Hoy se realizó un emotivo reconocimiento a Javiera Rubilar Sanhueza, exgimnasta rítmica que dejó su huella en la élite mundial representando a Chile y nuestra región con orgullo. La actividad fue encabezada por la seremi de Desarrollo Social y Familia, Mariela Huillipan y la directora regional, Gloria Carimán, acompañada de la seremi de la Mujer y la Equidad de Género, Sol Kaechele, el seremi del Deporte, Roger Ancamil, y el director regional del IND, Mauro Salinas.',
    fecha: '31 de marzo de 2025',
    imagen: '/img/javiera.jpg',
  },
];

const Noticias = () => {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const handleOpen = (src) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgSrc('');
  };

  return (
    <Box sx={{ my: 4, px: { xs: 1, sm: 2, md: 4 }, maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'center' }}>
        <NewspaperIcon sx={{ color: '#1976d2', fontSize: 36, mr: 1 }} />
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
          Noticias
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {noticias.map((noticia) => (
          <Grid item xs={12} sm={6} md={4} key={noticia.id}>
            <Card
              data-aos="fade-up"
              data-aos-duration="1500"
              sx={{
                cursor: 'pointer',
                boxShadow: 4,
                borderRadius: 3,
                bgcolor: '#17475a',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 8,
                },
                position: 'relative'
              }}
            >
              <IconButton
                onClick={() => handleOpen(noticia.imagen)}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  bgcolor: 'rgba(25, 118, 210, 0.8)',
                  color: '#fff',
                  zIndex: 2,
                  '&:hover': { bgcolor: 'rgba(25, 118, 210, 1)' }
                }}
                aria-label="Ampliar imagen"
              >
                <ZoomInIcon />
              </IconButton>
              <CardMedia
                component="img"
                height="260"
                image={noticia.imagen}
                alt={noticia.titulo}
                sx={{
                  width: '100%',
                  objectFit: 'cover',
                  minHeight: 360,
                  maxHeight: 260,
                  cursor: 'pointer'
                }}
                onClick={() => handleOpen(noticia.imagen)}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
                  {noticia.titulo}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b0bec5' }}>
                  {noticia.descripcion}
                </Typography>
                <Typography variant="caption" sx={{ color: '#90caf9' }} display="block" mt={1}>
                  {noticia.fecha}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ outline: 'none', maxWidth: '90vw', maxHeight: '90vh' }}>
          <img src={imgSrc} alt="Noticia ampliada" style={{ width: '100%', height: 'auto', maxHeight: '90vh', borderRadius: 8, boxShadow: '0 8px 32px #000a' }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Noticias;