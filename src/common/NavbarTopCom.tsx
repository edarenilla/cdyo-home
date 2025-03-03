import { IoSearch } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import NavIconName from "./NavIconName"


const NavbarTopCom = () => {
  return (

    <div className="nav--top-com" >

        <NavIconName 
        icon={<IoSearch /> }
        text='Buscar'
        link= '/buscar'  />

        <NavIconName 
        icon={<MdLanguage /> }
        text='Español' 
        link= '/lenguaje' />      

        <NavIconName  
        icon={<FaRegCircleUser /> }
        text='Iniciar sesión'     
        link= '/iniciar-sesion' />                                                   

    </div>
  )
}
export default NavbarTopCom