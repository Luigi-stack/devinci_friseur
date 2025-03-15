import { Link } from "react-router-dom";

function Nav_bar() {
  
    return (
      <nav className="navbar">
        <ul>
          <li><Link to="/team">Startseite</Link></li>
          <li><Link to="/gallery">Galerie</Link></li>
          <li><Link to="/prices">Preise</Link></li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </nav>
    );
  }
  
export default Nav_bar;