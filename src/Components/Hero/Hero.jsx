import React, { useEffect, useState } from 'react'
import './Hero.css' // Optional: Add styles for the Hero component

const heroContainer = {
  position: "relative",
  width: "100%",
  minHeight: "340px",
  height: "45vw",
  maxHeight: "480px",
  overflow: "hidden",
  borderRadius: "0 0 32px 32px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  marginBottom: "2rem"
};

const heroImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block"
};

const overlay = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(90deg, rgba(0,91,143,0.7) 0%, rgba(0,91,143,0.2) 100%)"
};

const textBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  background: "rgba(0,91,143,0.72)",
  borderRadius: "18px",
  padding: "2rem 2.5rem",
  boxShadow: "0 4px 24px rgba(30, 60, 90, 0.10)",
  textAlign: "center",
  maxWidth: "90vw"
};

const titleStyle = {
  fontWeight: 800,
  fontSize: "2.7rem",
  marginBottom: "1rem",
  lineHeight: 1.1,
  letterSpacing: "1px"
};

const subtitleStyle = {
  fontSize: "1.3rem",
  marginBottom: "0"
};

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
    <section style={heroContainer}>
      <img
        src="img/PLAZAYFRONTISMUNICIPALIDAD1.jpg"
        alt="Hero Image"
        style={{
          ...heroImg,
          transform: `translate(${offset.x}px, ${offset.y}px) translateY(${scrollY * 0.2}px)`
        }}
      />
      <div style={overlay}></div>
      <div style={textBox}>
        <h1 style={titleStyle}>Bienvenidos a la Ilustre Municipalidad de CholChol</h1>
        <p style={subtitleStyle}>Tu bienestar es nuestra prioridad</p>
      </div>
    </section>
  )
}

export default Hero
