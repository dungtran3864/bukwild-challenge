import logo from "../resources/abc_logo.svg";
import "./NavBar.css";

function NavBar(props) {
  const { changeMenu, currentMenuIndex, pages } = props;

  return (
    <nav className="navbar">
      <div>
        <img
          src={logo}
          className={"logo"}
          alt="logo"
          onClick={() => changeMenu(0)}
        />
        <ul className={"menu"}>
          {pages.map((page, pageIndex) => (
            <li key={pageIndex}>
              <a
                href="#"
                style={{
                  color: pageIndex === currentMenuIndex ? "#ffc004" : "white",
                }}
                onClick={() => changeMenu(pageIndex)}
              >
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button className="contact">Contact Us</button>
    </nav>
  );
}

export default NavBar;
