import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import es from 'date-fns/locale/es';

function ReservationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    fecha: '',
    hora: '',
    tramite: '',
  });

  const [fechaValida, setFechaValida] = useState(false);

  const tramites = [
    { value: 'licencia', label: 'Licencia de Conducir' },
    { value: 'certificado', label: 'Certificado de Residencia' },
    { value: 'pago', label: 'Pago de Patente' },
    { value: 'inscripcion', label: 'Inscripción de Vehículo' },
    { value: 'permiso', label: 'Permiso de Circulación' },
    { value: 'certificado_antecedentes', label: 'Certificado de Antecedentes' },
    { value: 'cambio_direccion', label: 'Cambio de Dirección' },
    { value: 'consulta', label: 'Consulta' },
    { value: 'reclamo', label: 'Reclamo Ciudadano' },
    { value: 'otro_tramite', label: 'Otro Trámite' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Reserva enviada con éxito');
  };

  const isTramiteConCita = [
    'licencia',
    'certificado',
    'pago',
    'permiso',
    'certificado_antecedentes',
    'cambio_direccion',
  ].includes(formData.tramite);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      data-aos="fade-up"
      data-aos-duration="1500"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
        bgcolor: '#fff',
        borderRadius: 3,
        boxShadow: 4,
        p: { xs: 2, sm: 4 },
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Formulario de Reserva
      </Typography>

      <TextField
        label="Nombre"
        name="nombre"
        variant="outlined"
        value={formData.nombre}
        onChange={handleChange}
        required
        aria-label="Nombre completo"
      />

      <TextField
        label="Correo Electrónico"
        name="correo"
        variant="outlined"
        type="email"
        value={formData.correo}
        onChange={handleChange}
        required
        aria-label="Correo electrónico"
      />

      <TextField
        label="Mensaje"
        name="mensaje"
        variant="outlined"
        multiline
        rows={4}
        value={formData.mensaje}
        onChange={handleChange}
        required
        aria-label="Mensaje"
      />

      <TextField
        select
        label="Tipo de Trámite"
        name="tramite"
        value={formData.tramite}
        onChange={handleChange}
        required
        aria-label="Tipo de trámite"
      >
        {tramites.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* Fecha y hora solo si el trámite requiere cita */}
      {isTramiteConCita && (
        <>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
            <DatePicker
              label="Fecha"
              value={formData.fecha ? new Date(formData.fecha) : null}
              onChange={(newValue) => {
                if (!newValue) {
                  setFechaValida(false);
                  setFormData({ ...formData, fecha: '', hora: '' });
                  return;
                }

                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const selectedDate = new Date(newValue);
                selectedDate.setHours(0, 0, 0, 0);
                const day = selectedDate.getDay();

                if (selectedDate >= today && day !== 0 && day !== 6) {
                  setFormData({
                    ...formData,
                    fecha: selectedDate.toISOString().split('T')[0],
                  });
                  setFechaValida(true);
                } else {
                  setFormData({ ...formData, fecha: '', hora: '' });
                  setFechaValida(false);
                  alert('Selecciona una fecha válida (lunes a viernes y posterior a hoy).');
                }
              }}
              shouldDisableDate={(date) => {
                const day = date.getDay();
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return day === 0 || day === 6 || date < today;
              }}
              renderInput={(params) => (
                <TextField {...params} required fullWidth aria-label="Fecha de cita" />
              )}
            />
          </LocalizationProvider>

          <TextField
            label="Hora disponible"
            name="hora"
            select
            InputLabelProps={{ shrink: true }}
            value={formData.hora}
            onChange={handleChange}
            required
            aria-label="Hora de cita"
            disabled={!fechaValida}
          >
            {Array.from({ length: 7 }, (_, i) => {
              const hour = 8 + i;
              const formattedHour = hour.toString().padStart(2, '0') + ':00';
              return (
                <MenuItem key={formattedHour} value={formattedHour}>
                  {formattedHour}
                </MenuItem>
              );
            })}
          </TextField>
        </>
      )}

      <Button variant="contained" color="primary" type="submit">
        Reservar
      </Button>
    </Box>
  );
}

export default ReservationForm;
