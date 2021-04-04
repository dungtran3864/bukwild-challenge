import logo from "../resources/abc_logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="logo" />
        <ul className={"menu"}>
          <li>
            <a>Industries</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <button className="contact">Contact Us</button>
    </nav>
  );
}

export default NavBar;
