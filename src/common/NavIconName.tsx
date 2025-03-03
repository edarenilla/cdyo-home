
import { useNavigate } from "react-router-dom"
import "../assets/css/header.css"
const NavIconName = ( {icon, text, link} ) => {

   const navegate = useNavigate();
    
  return (
    <button 
        className="nav--icon--name"
        onClick={() => navegate(link)}>
        {icon}{text}
    </button>
  )
}
export default NavIconName