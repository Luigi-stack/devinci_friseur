import { Container, Row, Col } from "react-bootstrap";
import homepage from '../Images/salon_hero.jpg'

function Hero() {
  return (
    <section className="hero">
      <h1 className="h1_hero">Herzlich Willkommen bei <br /> DeVinci Friseur</h1>

      <Container className="container">
        <Row className="align-items-center"> {/* Allinea verticalmente */}
          <Col md={6} sm={12}> {/* Colonna immagine */}
            <img 
              src={homepage} 
              alt="Salon Hero" 
              className="img-fluid hero-image" /* Ridimensionamento automatico */
            />
          </Col>
          <Col md={6} sm={12}> {/* Colonna testo */}
            <p>
              Mit viel Leidenschaft zum Beruf und hoher fachlicher Kompetenz sind wir für Sie da.
              Wir freuen uns täglich auf spannende und tolle Menschen, auf nette Gespräche und neue Herausforderung.
              Einfach mal die Seele baumeln lassen, sich in qualifizierte Hände geben und verwöhnen lassen.
              <br />
              Coloration und Schnitt in jeder Facette sind unser Spezialgebiet. Wir freuen uns auf euch!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;