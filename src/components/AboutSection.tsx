import '../assets/css/aboutsection.css'
import '../index.css'
import  imgAbout from '../../public/img/home_about_image.webp'
import StartCards from '../common/StartCards'
import { FaPlay } from "react-icons/fa6";
import { BiSolidMap } from "react-icons/bi";
const AboutSection = () => {
  return (
    <section className="about--section">
        <div className='about--section__img'>
            <img src={imgAbout} alt="" />
            <a href="" className="video--a"><FaPlay size={30} /> </a>
        </div>
        <div className='about--section__text'>
            <h1 className="h1--big color--white">Oración ininterrumpida <br /> <span className='text-outline yellow--stroke'>por Colombia</span></h1>
            <p className='p-about'>
            Colombia discierne y ora  es un movimiento internacional e interdenominacional de oración, misión y justicia; una reunión de oración ininterrumpida que ha estado activa durante cada minuto de este siglo hasta la fecha, en más de la mitad de departamentos de Colombia.
            </p>
            <StartCards />
            <div className="about--section__text__button">
                <button className="btn btn--secundary--w">
                <BiSolidMap  size={25}/> Mapa de iglesias Vinculadas
                </button>
                <button className="btn btn--primary--y">
                    Más sobre nosotros
                </button>
            </div>
        </div>

    </section>
    
  )
}
export default AboutSection