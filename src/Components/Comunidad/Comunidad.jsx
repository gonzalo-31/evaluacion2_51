import React from 'react';
import { Box, Typography, Divider, Paper } from '@mui/material';

export default function Comunidad() {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 6 },
        maxWidth: { xs: '100%', sm: 700, md: 900 },
        mx: 'auto',
        width: '100%',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          bgcolor: '#f5f5f5',
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: 'primary.main',
            letterSpacing: 1,
            textAlign: 'center',
            fontSize: { xs: 22, sm: 28, md: 32 },
          }}
        >
          Cholchol: Historia y Patrimonio
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontSize: { xs: 16, sm: 18 } }}>
          <strong>Chol Chol</strong> o <strong>Cholchol</strong> (Mapudungún: <em>Lugar de Cardos</em>) es un pueblo y comuna de la zona sur de Chile, perteneciente a la provincia de Cautín en la Región de La Araucanía. Fue creada por la ley 19.944 del 22 de abril de 2004, al segregarse de la comuna de Nueva Imperial.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontSize: { xs: 16, sm: 18 } }}>
          Limita al norte con las comunas de Galvarino y Lumaco, al este con Temuco, al oeste con Carahue y al sur con Nueva Imperial.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 1, color: 'primary.dark', fontWeight: 'bold' }}>
          Siglo XIX
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontSize: { xs: 16, sm: 18 } }}>
          Durante el proceso de ocupación de la Araucanía, el 4 de noviembre de 1881 ocurrió una sublevación mapuche en la zona de Cholchol, Imperial y Toltén. Entre los días 5 y 6, un grupo de alrededor de 400 hombres atacó el fuerte de Lumaco, siendo rechazados por una compañía del batallón Ñuble.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontSize: { xs: 16, sm: 18 } }}>
          El coronel Gregorio Urrutia, jefe de las fuerzas de la Frontera, al enterarse del levantamiento indígena, regresó en tren expreso hasta Angol. Desde allí se dirigió a Traiguén junto a una columna de 400 hombres. Al llegar al lugar donde estuvo asentada la antigua ciudad de La Imperial, se reunió con otros 250 hombres provenientes de Temuco, además de fuerzas de Cañete, Lebu, Tomé y Talcahuano.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontSize: { xs: 16, sm: 18 } }}>
          Los mapuches se desplazaban por los campos apropiándose de animales, saqueando misiones, incendiando casas y ajusticiando. El coronel Urrutia, al llegar a Cholchol el 10 de noviembre, ordenó construir un fuerte en la ruca del toqui Ancamilla, cumpliendo así la amenaza hecha previamente al cabecilla indígena. El 22 de ese mes se iniciaron los trabajos, dando origen al pueblo que más tarde se establecería con el nombre de Cholchol.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontSize: { xs: 16, sm: 18 } }}>
          En 1896, un grupo de misioneros anglicanos de la Sociedad Misionera de América del Sur, liderados por Allen W. Gardiner y Charles Sadleir, llegó a Cholchol para ampliar la Misión Araucanía, bajo la dirección del pastor William Wilson.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontSize: { xs: 16, sm: 18 } }}>
          En 1898 fue establecida la primera escuela con internado de la localidad, permitiendo la alfabetización de las comunidades mapuches locales en una época de alta pobreza y analfabetismo. Se impartían clases en mapudungún y español, además de competencias agrícolas e industriales. Asimismo, se construyó la Iglesia Anglicana La Ascensión, actualmente parte de la Iglesia Anglicana de Chile, y en 1933 se inauguró el primer hospital de Cholchol.
        </Typography>
      </Paper>
    </Box>
  );
}