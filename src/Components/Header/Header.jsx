import React from 'react';
import {
  AppBar, Box, Toolbar, Button, Typography, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation
import logo from '/public/img/logo_Blanco.png';

const topNavItems = [
  { label: 'Solicitar Información', url: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498' },
  { label: 'Transparencia Activa', url: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045' },
  { label: 'Plataforma Ley Lobby', url: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045' },
];

const mainNavItems = [
  { label: 'Home', path: '/' },
  { label: 'Municipio', path: '/municipio' },
  { label: 'Contactos', path: '/contactos' },
  { label: 'Comunidad', path: '/Comunidad' },
  { label: 'Webmail', external: true, url: 'https://municholchol.cl:2096/webmaillogout.cgi' } 
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation(); 

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {}
      {!isMobile && (
        <AppBar position="static" sx={{ bgcolor: 'teal', py: 1 }}>
          <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
            {topNavItems.map((item) => (
              <Button
                key={item.label}
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  '&:hover': {
                    border: '2px solid white',
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      )}

      {/* Logo y nombre */}
      <Box
        sx={{
          bgcolor: 'primary.dark',
          py: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img
          src={logo}
          alt="Logo Municipalidad"
          style={{
            width: 100,
            height: 100,
            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
            cursor: 'pointer'
          }}
          onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.12)')}
          onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        {/* Olas animadas */}
        <Box
          sx={{
            width: '100%',
            position: 'absolute',
            left: 0,
            bottom: -1,
            zIndex: 0,
            lineHeight: 0
          }}
        >
          <svg
            viewBox="0 0 500 40"
            preserveAspectRatio="none"
            style={{
              display: 'block',
              width: '100%',
              height: 40,
              minHeight: 20
            }}
          >
            <path
              d="M0,20 Q125,40 250,20 T500,20 V40 H0 Z"
              fill="#1976d2"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M0,20 Q125,40 250,20 T500,20 V40 H0 Z;
                  M0,25 Q125,10 250,25 T500,25 V40 H0 Z;
                  M0,20 Q125,40 250,20 T500,20 V40 H0 Z
                "
              />
            </path>
          </svg>
        </Box>
      </Box>

      {/* Barra principal de navegación */}
      <AppBar position="static" sx={{ bgcolor: 'primary.dark', py: 1 }}>
        <Toolbar sx={{ justifyContent: 'center', gap: 4 }}>
          {/* Menú hamburguesa en móviles */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Navegación normal en desktop */}
          {!isMobile &&
            mainNavItems.map((item, index) =>
              item.external ? (
                <Button
                  key={index}
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    bgcolor: 'transparent',
                    px: 2,
                    borderRadius: 1,
                    display: { xs: 'none', md: 'inline-flex' },
                    '&:hover': {
                      border: '2px solid white',
                      borderRadius: 2,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={index}
                  component={Link}
                  to={item.path}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? 'primary.dark'
                        : 'white',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    bgcolor:
                      location.pathname === item.path
                        ? 'white'
                        : 'transparent',
                    px: 2,
                    borderRadius: 1,
                    display: { xs: 'none', md: 'inline-flex' },
                    '&:hover': {
                      border: '2px solid white',
                      borderRadius: 2,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              )
            )
          }
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box
          sx={{ width: 240 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {mainNavItems.map((item, index) =>
              item.external ? (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    selected={location.pathname === item.path} // Resalta el seleccionado
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              )
            )}
            <List sx={{ mt: 2, borderTop: '1px solid #ccc' }}>
              {topNavItems.map((item, index) => (
                <ListItem key={`top-${index}`} disablePadding>
                  <ListItemButton component="a" href={item.url} target="_blank" rel="noopener noreferrer">
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
