import { Container, Row, Col } from "react-bootstrap";

// Importa le immagini
import img1 from "../Images/Gallery/1000350253.jpg";
import img2 from "../Images/Gallery/1000350254.jpg";
import img3 from "../Images/Gallery/1000350255.jpg";
import img4 from "../Images/Gallery/1000350256.jpg";
import img5 from "../Images/Gallery/1000350259.jpg";
import img6 from "../Images/Gallery/1000350263.jpg";
import img7 from "../Images/Gallery/1000350272.jpg";
import img8 from "../Images/Gallery/1000351363.jpg";

function Gallery() {
  const images = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
    { src: img7, alt: "Image 7" },
    { src: img8, alt: "Image 8" },
  ];

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4 h1_price">Galerie</h1>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid shadow image-galleria"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;