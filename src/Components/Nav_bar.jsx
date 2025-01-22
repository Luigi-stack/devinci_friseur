// import { Link } from "react-router-dom";

function Nav_bar() {
  
    return (
      <nav className="navbar">
        <ul>
          <li><a href="#team">Team + Fotos</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#contact">Kontakt</a></li>
          {/* <li><Link to="/prices">Preise</Link></li> */}
          <li><a href="#links">Links (Insta & Google)</a></li>
        </ul>
      </nav>
    );
  }
  
export default Nav_bar;