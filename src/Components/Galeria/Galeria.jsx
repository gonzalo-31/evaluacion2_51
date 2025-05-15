import React, { useState } from 'react';
import { IconButton, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  { img: "/img/Galeria/Cruce_En_Balsa.jpg" },
  { img: "/img/Galeria//PLAZAYFRONTISMUNICIPALIDAD1.jpg" },
  { img: "/img/Galeria/rukabuena.jpg" },
  { img: "/img/Galeria/puenteviejo.jpg" },
  { img: "/img/Galeria/puentesdesdeabajoinvierno.jpg" },
  { img: "/img/Galeria/frontis.png" },
  { img: "/img/Galeria/Puente1.jpg" }
];

function Galeria() {
  const [imgIdx, setImgIdx] = useState(0);
  const [open, setOpen] = useState(false);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setImgIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setImgIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleImgClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ maxWidth: 700, margin: "3rem auto", position: "relative" }}>
      <div style={{
        width: '100%',
        height: 380,
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        background: '#e3f2fd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(23,71,90,0.7)',
            color: '#fff',
            zIndex: 3,
            '&:hover': { bgcolor: 'rgba(23,71,90,1)' }
          }}
          aria-label="Anterior"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <img
          src={slides[imgIdx].img}
          alt={`Galería ${imgIdx + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            cursor: 'pointer'
          }}
          onClick={handleImgClick}
        />
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(23,71,90,0.7)',
            color: '#fff',
            zIndex: 3,
            '&:hover': { bgcolor: 'rgba(23,71,90,1)' }
          }}
          aria-label="Siguiente"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            style={{
              display: 'inline-block',
              width: 12,
              height: 12,
              margin: '0 4px',
              borderRadius: '50%',
              background: idx === imgIdx ? '#1976d2' : '#b0bec5',
              cursor: 'pointer'
            }}
            onClick={() => setImgIdx(idx)}
          />
        ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          style: {
            background: "transparent",
            boxShadow: "none",
            overflow: "visible",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        }}
      >
        <div style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%"
        }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(23,71,90,0.7)',
              color: '#fff',
              zIndex: 3,
              '&:hover': { bgcolor: 'rgba(23,71,90,1)' }
            }}
            aria-label="Anterior"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <img
            src={slides[imgIdx].img}
            alt=""
            style={{
              width: "auto",
              height: "80vh",
              maxWidth: "90vw",
              borderRadius: 16,
              boxShadow: '0 8px 32px #000a',
              objectFit: 'contain',
              background: "#fff"
            }}
            onClick={e => e.stopPropagation()}
          />
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(23,71,90,0.7)',
              color: '#fff',
              zIndex: 3,
              '&:hover': { bgcolor: 'rgba(23,71,90,1)' }
            }}
            aria-label="Siguiente"
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'rgba(0,0,0,0.5)',
              color: '#fff',
              zIndex: 4,
              '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
            }}
            aria-label="Cerrar"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Dialog>
    </div>
  );
}

export default Galeria;