import { Link } from "react-router-dom";

function Nav_bar() {
  
    return (
      <nav className="navbar">
        <ul>
          <li><Link to="/">Startseite</Link></li>
          <li><Link to="/galerie">Galerie</Link></li>
          <li><Link to="/preise">Preise</Link></li>
          <li><a href="/kontakt">Kontakt</a></li>
        </ul>
      </nav>
    );
  }
  
export default Nav_bar;