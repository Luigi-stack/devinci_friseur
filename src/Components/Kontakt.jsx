import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Kontakt = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <h2 className="text-center mb-4 h1_price">Kontakt</h2>
        <Col className='d-flex justify-content-center'>
          <div className="kontakte-container text-center">
            <p>
             <strong>Montag - Freitag:</strong>  <br />
              9:00 - 18:00 <br />
              <strong>Samstag:</strong> <br />
              Termin nach Vereinbarung
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a className='kontakte-phone' href="tel:+4935179691927">0351 79691927</a>
            </p>
            <p>
              <strong>Adresse:</strong> <br /> Pirnaer Landstraße 125, 01257 Dresden
            </p>

            <div className="ratio ratio-16x9 mt-4">
              <iframe className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.2183566551257!2d13.823786176230124!3d51.01211474676509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c7bf90bc24d9%3A0x6d4b11d68fbaf1c5!2sDeVinci%20Friseur!5e0!3m2!1sde!2sbe!4v1742037118403!5m2!1sde!2sbe"
                allowFullScreen=""
                loading="lazy"
                title="Mappa"
              ></iframe>
            </div>

            <p className='mt-4'>Folgt uns auf Instagram <br /> <FaArrowDownLong className='my-2' /> <br />
              <Link className='text-reset' target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/devinci__friseur__?igsh=NWduMG9jb293aXI1"><FaInstagram className='fs-1' /></Link></p>


          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Kontakt;