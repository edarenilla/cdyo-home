import MainMenu from "./MainMenu";
import logo from "../../public/img/logo.png"; // Importación correcta de la imagen

const NavbarMainCom = () => {
  const menuItems: { id: number; text: string; link: string }[] = [
    { id: 1, text: "Acerca de", link: "/acerca-de" },
    { id: 2, text: "Únete", link: "/unete" },
    { id: 3, text: "Cómo orar", link: "/como-orar" },
    { id: 4, text: "Recursos", link: "/Recursos" },
    { id: 5, text: "Blog", link: "/Blog" },
    { id: 6, text: "Dona", link: "/dona" },
  ];

  return (
    <div className="nav--main-com">
      <img className="logo" src={logo} alt="Logo Colombia Discierne y Ora" />
      <nav className="nav--menu">
        <ul className="ul--menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <MainMenu link={item.link} text={item.text} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMainCom;
