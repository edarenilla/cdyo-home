import '../assets/css/footer.css'
import logo from '../../public/img/logo.png'
import { BiSolidMap } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import gowup from '../../public/img/gowup.png'
const Footer = () => {
  return (
<footer>
    <div className="footer">
        <div className='footer__logo'> 
            <img src={logo} alt="" />
        </div>
        <div className='footer__text'>
            <h4>2 Crónicas 7-14</h4>
            <small> Si se humillare mi pueblo, sobre el cual mi nombre es invocado, y oraren, y buscaren mi rostro, y se convirtieren de sus malos caminos; entonces yo oiré desde los cielos, y perdonaré sus pecados, y sanaré su tierra.</small>
        </div>
        <div className='footer__menu'>
            <h4>Menú</h4>
            <ul>
                <li><a href="/unete">Únete a nuestro movimiento</a></li>
                <li><a href="/unete">Cómo orar</a></li>
                <li><a href="/recursos">Recursos de oración</a></li>
                <li><a href="/blog">Blog, Noticias y novedades</a></li>
                <li><a href="/dona">Dona</a></li>
            </ul>
        </div>
        <div className='footer__contacto'>
            <h4>Contacto</h4>
            <ul>
                <li><a href=""><BiSolidMap  size={20}/>La Ceja, Antioquia - Colombia</a></li>
                <li><a href="tel:3207074917"><BsWhatsapp  size={20} /> +57 3207074917</a></li>
                <li><a href="mailto:info@colombiadiscierneyora.co"><HiOutlineMailOpen size={20}  />info@colombiadiscierneyora.co</a></li>
            </ul>
            <div className="footer--div--social">
                    <FaYoutube 
                        className='footer--icon--social'
                        size={30} />
                    <FaFacebook
                        className='footer--icon--social'
                        size={30}  /> 
                    <FaInstagram
                        className='footer--icon--social'
                        size={30}  />
            </div>
            
        </div>  
        
        </div>
        <div className="footer--copyright">
                <small>Todos los derechos reservados © 2025 Colombia Discierne y Ora. </small>
                <small>By:  <img className='footer--img--gowup' src={gowup} alt="logo gowup marketing" /> </small>  
        </div>
    </footer>
  )
}
export default Footer