import React, { useEffect, useState } from 'react'
import './Hero.css' // Optional: Add styles for the Hero component

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX / width) - 0.5) * 20; // Adjust movement intensity
    const y = ((clientY / height) - 0.5) * 20;
    setOffset({ x, y });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
        <div className="hero-text" style={{ margin: 0, padding: 0 }}> {/* Elimina márgenes y padding */}
            <h1 style={{ margin: 0, padding: 0 }}>Bienvenidos a la Ilustre Municipalidad de CholChol</h1>
            <p style={{ margin: 0, padding: 0 }}>Tu bienestar es nuestra prioridad</p>
        </div>
      <img
        src="src/assets/img/PLAZAYFRONTISMUNICIPALIDAD1.jpg"
        alt="Hero Image"
        className="hero-image"
        style={{
          height: '100vh', // Ajusta la altura a 100vh
          objectPosition: 'top', // Ajusta la posición de la imagen desde la parte superior
          transform: `translate(${offset.x}px, ${offset.y}px) translateY(${scrollY * 0.2}px)`
        }}
      />
    </section>
  )
}

export default Hero
