import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const images = [
    { img: "src/assets/img/permiso_circulacion.jpg", title: 'Permiso circulacion', link: 'https://portalweb.insico.cl/Cholchol/Permisos/' },
    { img: 'src/assets/img/imagen2.jpg', title: 'Evento 2', link: 'https://example.com/evento2' },
    { img: 'src/assets/img/imagen3.jpg', title: 'Evento 3', link: 'https://example.com/evento3' },
];

function Gallery() {
    return (
        <ImageList cols={3} gap={8}> {/* Ajusta el espacio entre imágenes */}
            {images.map((item) => (
                <ImageListItem key={item.img}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '80%', height: 'auto', maxHeight: '200px' }} // Ajusta el tamaño máximo
                        />
                    </a>
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Gallery;