import { useState } from "react"; // Hook para manejar el estado del slider
import { motion } from "framer-motion"; // Librería para animaciones
import { GoArrowLeft, GoArrowRight } from "react-icons/go"; // Iconos de flechas para los botones
import '../assets/css/recursosslider.css';

const slides = [
    {
        src : '/img/imagen--recursos--1.jpg',
        text : 'Puedes descubrir el poder de la oración en YouTube',
        link : '/recursos',
    },
    {
        src : '/img/imagen--recursos--2.jpg',
        text : 'Curso de cómo orar',    
        link : '/recursos',
    },    
    {
        src : '/img/imagen--recursos--3.jpg',
        text : 'Curso de liderazgo en Vimeo',    
        link : '/recursos',     
    },
    {
        src : '/img/imagen--recursos--4.jpg',    
        text : 'Galería de imágenes',    
        link : '/recursos',     
    },
    {
        src : '/img/imagen--recursos--5.jpg',    
        text : 'Otros recursos',    
        link : '/recursos',
    } 
];

export default function SliderUnete() {
  const [index, setIndex] = useState(0); // Estado para almacenar el índice de la imagen actual

  const nextImage = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1); // Avanza al siguiente slide
    }
  };

  const prevImage = () => {
    if (index > 0) {
      setIndex(index - 1); // Retrocede al slide anterior
    }
  };

  return (
    <section className="slider--recursos--section">
        <h1 className="vertical-text">Recursos</h1>
        <div className="slider--recursos-wrapper">
          <div className="slider--recursos-container"> 
            <motion.div
              className="slider--recursos-track"
              animate={{ x: `-${index * 21}%` }}
              transition={{ duration: 0.3 }}>
              {slides.map((slide, i) => (
                <div key={i} className="slider--recursos-item">
                  <img src={slide.src} alt={`Slide ${i + 1}`} className="slider--recursos-image" />
                  <div className="slider--recursos-text">
                    <h2>{slide.text}</h2>

                  </div>
                </div>
              ))}
            </motion.div>
            
          </div>

          {/* Botones de navegación */}
          <div className="slider--recursos__botones">
              {/* Barra de progreso */}
                    <div className="progress-bar__recursos">
                      <motion.div
                         className="progress__recursos"
                        style={{ width: `${((index + 1) / slides.length) * 100}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
                        transition={{ duration: 0.5 }}/>
                    </div>
                    <div className="slider--recursos-buttons">
                        <button onClick={prevImage} className="slider--recursos-button left">
                        <GoArrowLeft size={30} />
                        </button>
                        <button onClick={nextImage} className="slider--recursos-button right">
                        <GoArrowRight size={30} />
                        </button>
                    </div>  
          </div>
        </div>

        <p className="vertical-text">Recursos</p>
    </section>
  );
}
