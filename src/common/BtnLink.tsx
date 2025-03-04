import { GoArrowRight } from "react-icons/go";
import '../assets/css/unetesection.css'
type props = {
    text: string
}
const BtnLink: React.FC<props> = ( {text} ) => {
  return (
    <div className="btn--link--unete">
       <span><GoArrowRight size={40} /></span> {text}
    </div>
  )
}
export default BtnLink