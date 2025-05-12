import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

function ReservationForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
        fecha: '',
        hora: '',
        tramite: '',
    });

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
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        alert('Reserva enviada con éxito');
        // Aquí puedes enviar los datos a un servidor o procesarlos como desees.
    };

    return (
        <>
            <p>Formulario de Reserva</p>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}
            >
                <TextField
                    label="Nombre"
                    name="nombre"
                    variant="outlined"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Correo Electrónico"
                    name="correo"
                    variant="outlined"
                    value={formData.correo}
                    onChange={handleChange}
                    required
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
                />
                <TextField
                    select
                    label="Tipo de Trámite"
                    name="tramite"
                    value={formData.tramite}
                    onChange={handleChange}
                    required
                >
                    {tramites.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {/* Mostrar campos de fecha y hora solo si el trámite requiere cita */}
                {formData.tramite === 'licencia' || formData.tramite === 'certificado' || formData.tramite === 'pago' || formData.tramite === 'permiso' || formData.tramite === 'certificado_antecedentes' || formData.tramite === 'cambio_direccion' ? (
                    <>
                        <TextField
                            label="Fecha"
                            name="fecha"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.fecha}
                            onChange={(e) => {
                                const selectedDate = new Date(e.target.value);
                                const today = new Date();
                                today.setHours(0, 0, 0, 0); // Elimina la hora para comparar solo fechas
                                const day = selectedDate.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

                                if (selectedDate >= today && day !== 6 && day !== 7) {
                                    handleChange(e);
                                } else {
                                    alert('Por favor selecciona una fecha válida');
                                }
                            }}
                            required
                        />
                        <TextField
                            label="Hora disponible"
                            name="hora"
                            select
                            InputLabelProps={{ shrink: true }}
                            value={formData.hora}
                            onChange={handleChange}
                            required
                        >
                            {Array.from({ length: 10 }, (_, i) => {
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
                ) : null}

                <Button variant="contained" color="primary" type="submit">
                    Reservar
                </Button>
            </Box>
        </>
    );
}

export default ReservationForm;