import '../assets/css/header.css'
import NavbarMainCom from '../common/NavbarMainCom'
import NavbarTopCom from '../common/NavbarTopCom'

const Header = () => {
  return (
    <div className="header section--dark" >

            <NavbarTopCom />
            <NavbarMainCom />

    </div>
  )
}
export default Header