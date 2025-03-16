import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import '../assets/css/comments.css'

const comments = [
  {
    image: "../../public/img/user--1.jpg",
    name: "Juan Pérez",
    profession: "Compositor y lider de alabanza",
    comment: "24-7 ha formado parte de mi vida y de mis primeros pasos con el Señor. Fue en una sala de oración 24-7 donde aprendí a pasar tiempo con Dios sin mirar el reloj y dónde descubrí que orar no tenía que ser algo religioso y aburrido, sino que se podía expresar una oración a Dios de maneras diferentes, creativas y vivas.",
    site: "Sabana Grande, Sucre",
  },
  {
    image: "../../public/img/user--2.jpg",
    name: "María Gómez",
    profession: "Lider de jóvenes y de oración",
    comment: "“Oración 24-7 está a la vanguardia de lo que el Espíritu de Dios está suscitando en toda la iglesia global: un retorno a una vida neo-monástica de oración profunda, una densa red de vida comunitaria y un enorme corazón por la justicia y el avance del Evangelio. Sigo viéndoles como una estrella polar para la iglesia del futuro”",
    site: "Potrerito, Valle del cauca",
  },
  {
    image: "../../public/img/user--3.jpg",
    name: "Carlos Maza",
    profession: "Pastor fundador de Bridgetown Church en Portland",
    comment: "Cuando era un adolescente que creía que las reuniones de oración eran algo aburrido y sin impacto, viví mi primera experiencia de Oración 24-7. Todavía recuerdo lo vivido en aquella sala tan especial, llena de elementos creativos que detonaban la oración en el corazón de los que estabamos allí. Experimentar algo así cambió algo en mí para siempre y me hizo entender radicalmente lo importante que es la oración, lo emocionante que puede ser y sus efectos poderosos.",
    site: "Medellín, Antioquia",
  },
];

export default function CommentsSectionSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  return (
    <section className="body--comments">
    <div className="comments--section__slider">
      <div className="comments--section__slider-container">
        <div className="comments--section__slider-left">
          <img src={comments[index].image} alt={comments[index].name} className="quote_img" />
          <h2>{comments[index].name}</h2>
          <p>{comments[index].profession}</p>
          <p>{comments[index].site}</p>
        </div>
        <div className="comments--section__slider-right">
          <p>{comments[index].comment}</p>
        </div>
      </div>
      <div className="comments--section__slider-controls">
        <button onClick={prevSlide} className="comments--section__slider-button left">
          <GoArrowLeft size={30} />
        </button>
        <button onClick={nextSlide} className="comments--section__slider-button right">
          <GoArrowRight size={30} />
        </button>
      </div>
    </div>
    </section>
  );
}