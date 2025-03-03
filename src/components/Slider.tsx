// src/Slider.js
import  { useState, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import '../assets/css/slider.css'

const slides = [
  {
    image: "../img/image.jpg",
    title: "De la condición de la iglesia depende la condición de la nación",
    subtitle: "Si mi pueblo que se identifica usando mi nombre se humilla, ora, me busca y abandona su mala conducta, entonces yo lo    escucharé desde el cielo, perdonaré sus pecados y restauraré el bienestar del país.",
   
    buttonText: "Más información",
    link: "#"
  },
  {
    image: "../img/image-1.jpg",
    title: "Descubre como la oración ha transformado naciones",
    subtitle: "La oración tiene un poder sobrenatural que puede transformar naciones enteras",
    buttonText: "Conocer más este tema",
    link: "#"
  },
  {
    image: "../img/image-2.jpg",
    title: "Oramos para que Colombias se transforme en un pueblo cristiano",
    subtitle: "La constancia de nuestra oración nos permitira convertir a Colombia en un pueblo cristiano",
    buttonText: "Cómo podemos ayudar",
    link: "#"
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avanzar automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider-container">
      <button className="button-slider prev" onClick={prevSlide}>
      <GoArrowLeft size={30} />
      </button>

      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a href={slide.link} className="button-link">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="button-slider next" onClick={nextSlide}>
      <GoArrowRight size={30} />
      </button>

      {/* Indicadores */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;