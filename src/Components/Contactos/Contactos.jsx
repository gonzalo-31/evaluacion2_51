import React from 'react';
import { AppBar, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const contactos = [
  { id: 1, area: 'INFORMACIONES', anexo: '452 734200' },
  { id: 2, area: 'OMIL', anexo: '452 734236' },
  { id: 3, area: 'SUBSIDIOS Y PENSIONES 1', anexo: '452 734230' },
  { id: 4, area: 'SUBSIDIOS Y PENSIONES 2', anexo: '452 734229' },
  { id: 5, area: 'PROGRAMA MUJER TRABAJADORA Y JEFAS DE HOGAR', anexo: '452 734224' },
  { id: 6, area: 'HIDRICO', anexo: '452 734246' },
  { id: 7, area: 'DAF', anexo: '452 734238' },
  { id: 8, area: 'RENTAS Y PATENTES DAF', anexo: '452 734249' },
  { id: 9, area: 'RRHH 1', anexo: '452 734220' },
  { id: 10, area: 'RRHH 2', anexo: '452 734216' },
  { id: 11, area: 'DIRECCIÓN DE OBRAS MUNICIPAL', anexo: '452 734213' },
  { id: 12, area: 'OPERACIONES', anexo: '452 734202' },
  { id: 13, area: 'PROGRAMAS EXTRA PRESUPUESTARIOS', anexo: '452 734260' },
  { id: 14, area: 'CAJA', anexo: '452 734233' },
  { id: 15, area: 'ENCARGADO VIVIENDA', anexo: '452 734211' },
  { id: 16, area: 'AYUDA SOCIAL', anexo: '452 734215' },
  { id: 17, area: 'DIRECTOR DE CONTROL', anexo: '452 734237' },
  { id: 18, area: 'SECRETARIA DIDECO', anexo: '452 734243' },
  { id: 19, area: 'ADMINISTRACIÓN', anexo: '452 734241' },
  { id: 20, area: 'SECRETARIA ADMINISTRACIÓN', anexo: '452 734247' },
  { id: 21, area: 'ASESOR JURÍDICO', anexo: '452 734259' },
  { id: 22, area: 'UNIDAD GRD', anexo: '452 734264' },
  { id: 23, area: 'TRANSITO 1', anexo: '452 734217' },
  { id: 24, area: 'TRANSITO 2', anexo: '452 734250' },
  { id: 25, area: 'TRANSPARENCIA', anexo: '452 734254' },
  { id: 26, area: 'SECRETARIA MUNICIPAL', anexo: '452 734210' },
  { id: 27, area: 'SEC. SECRETARIA MUNICIPAL', anexo: '452 734225' },
  { id: 28, area: 'SEC. ADQUISICIONES', anexo: '452 734209' },
  { id: 29, area: 'TESORERIA', anexo: '452 734258' },
  { id: 30, area: 'PROGRAMA FAMILIAS 1', anexo: '452 734218' },
  { id: 31, area: 'PROGRAMA FAMILIAS 2', anexo: '452 734235' },
  { id: 32, area: 'SECRETARIA DEFICIT HIDRICO', anexo: '452 734227' },
  { id: 33, area: 'REGISTRO SOCIAL DE HOGARES', anexo: '452 734212' },
  { id: 34, area: 'MEDIO AMBIENTE', anexo: '452 734208' },
  { id: 35, area: 'SECRETARIA HIDRICO', anexo: '452 734227' },
  { id: 36, area: 'ORGANIZACIONES', anexo: '452 734252' },
  { id: 37, area: 'SECRETARIA DIRECCIÓN DE OBRAS', anexo: '452 734240' },
  { id: 38, area: 'DISCAPACIDAD', anexo: '452 734248' },
  { id: 39, area: 'MARIA ARMIJO', anexo: '452 734234' },
];

const Contactos = () => {
  return (
    <Box
      id="contactos"
      sx={{
        px: { xs: 0, md: 4 },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh',
        
      }}
    >
      <AppBar position="static" sx={{ bgcolor: 'teal', width: '100vw', left: 0 }}>
        {/* ... */}
      </AppBar>
      <Box
        sx={{
          bgcolor: 'primary.dark',
          py: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100vw',
          left: 0,
        }}
      >
        {/* ... */}
      </Box>
      <AppBar position="static" sx={{ bgcolor: 'primary.dark', py: 1, width: '100vw', left: 0 }}>
        {/* ... */}
      </AppBar>
      <Paper
        elevation={6}
        sx={{
          width: { xs: '98vw', md: '80vw', lg: '70vw' },
          maxWidth: '1200px',
          p: { xs: 1, md: 4 },
          mt: 2,
          mb: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 4,
            color: 'primary.main',
            fontWeight: 'bold',
            letterSpacing: 2,
          }}
        >
          Contactos Municipales
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#009688' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>#</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Área</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Anexo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactos.map((contacto, idx) => (
                <TableRow
                  key={contacto.id}
                  sx={{
                    backgroundColor: idx % 2 === 0 ? '#f5f5f5' : 'white',
                  }}
                >
                  <TableCell>{contacto.id}</TableCell>
                  <TableCell>{contacto.area}</TableCell>
                  <TableCell>{contacto.anexo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Contactos;