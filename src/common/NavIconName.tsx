import { useNavigate } from "react-router-dom";
import "../assets/css/header.css";

interface NavIconNameProps {
  icon: React.ReactNode;  // Permite pasar elementos JSX como iconos
  text: string;
  link: string;
}

const NavIconName: React.FC<NavIconNameProps> = ({ icon, text, link }) => {
  const navigate = useNavigate();

  return (
    <button 
      className="nav--icon--name"
      onClick={() => navigate(link)}
    >
      {icon}{text}
    </button>
  );
}

export default NavIconName;
