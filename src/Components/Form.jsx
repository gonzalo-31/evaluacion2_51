import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& > :not(style)': { m: 2, width: '50ch' },
                minHeight: '100vh'
            }}
            noValidate
            autoComplete="off"
        >
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Formulario de contacto</p>
            <TextField id="outlined-basic" label="Nombres" variant="outlined" sx={{ width: '50ch', input: { color: 'white' } }} /><br />
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" sx={{ width: '50ch', input: { color: 'white' } }} /><br />
            <TextField
                id="outlined-basic"
                label="Mensaje"
                variant="outlined"
                multiline
                rows={10}
                sx={{ width: '100ch', input: { color: 'white' } }}
            />
        </Box>
    );
}
