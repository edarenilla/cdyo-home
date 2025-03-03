import { useState } from "react";
import { motion } from "framer-motion";
import "../assets/css/uneteslider.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const slides = [
  {
    src: "/img/image-slider-1.webp",
    text: "Registra o gestiona tu sala de oración aquí",
    link: "/coleccion"
  },
  {
    src: "/img/imagen-slider-2.jpg",
    text: "Caminatas de oración",
    link: "/ofertas"
  },
  {
    src: "/img/imagen-slider-3.jpg",
    text: "Preguntas frecuentes acerca de la oración",
    link: "/nosotros"
  }
];

export default function SliderUnete() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevImage = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slider-2">
      <div className="slider2-wrapper">
        <div className="controls-progress">
          <div className="progress-bar">
            <motion.div
              className="progress"
              style={{ width: `${((index + 1) / slides.length) * 100}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="controls-slider">
            <button onClick={prevImage} className="slider2-button left"><GoArrowLeft size={30} /></button>
            <button onClick={nextImage} className="slider2-button right"><GoArrowRight size={30} /></button>
          </div>
        </div>
        <div className="slider2-container">
          <motion.div
            className="slider2-track"
            animate={{ x: `-${index * 460}px` }}
            transition={{ duration: 0.3 }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="slider2-item">
                <img src={slide.src} alt={`Slide ${i + 1}`} className="slider2-image" />
                <div className="slider2-text">
                  <h2>{slide.text}</h2>
                  <a href={slide.link} className="slider2-link">Leer ahora</a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
