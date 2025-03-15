import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; 2025 De Vinci Friseur. Alle Rechte vorbehalten.
        </p>
        <p>
          Besuchen Sie uns auf <Link target="_blank" rel="noopener noreferrer" style={{ color: '#b88cb8', textDecoration: 'none' }} to="https://www.instagram.com/devinci__friseur__?igsh=NWduMG9jb293aXI1">Instagram</Link> und <Link target="_blank" rel="noopener noreferrer"  style={{ color: '#b88cb8', textDecoration: 'none' }} to="https://g.co/kgs/6mwaJQR">Google</Link>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;