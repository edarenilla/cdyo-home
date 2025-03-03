import { useNavigate } from "react-router-dom";

interface MainMenuProps {
  link: string;
  text: string;
}

const MainMenu: React.FC<MainMenuProps> = ({ link, text }) => {
  const navigate = useNavigate();

  return (
    <a
      className="nav-main-menu"
      onClick={() => navigate(link)}
    >
      {text}
    </a>
  );
};

export default MainMenu;

