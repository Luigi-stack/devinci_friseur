import { Container, Row, Col } from 'react-bootstrap';

function Gallery() {
  const images = [
    { src: 'src/Images/Gallery/1000350253.jpg', alt: 'Image 1' },
    { src: 'src/Images/Gallery/1000350254.jpg', alt: 'Image 2' },
    { src: 'src/Images/Gallery/1000350255.jpg', alt: 'Image 3' },
    { src: 'src/Images/Gallery/1000350256.jpg', alt: 'Image 4' },
    { src: 'src/Images/Gallery/1000350259.jpg', alt: 'Image 5' },
    { src: 'src/Images/Gallery/1000350263.jpg', alt: 'Image 6' },
    { src: 'src/Images/Gallery/1000350272.jpg', alt: 'Image 7' },
    { src: 'src/Images/Gallery/1000351363.jpg', alt: 'Image 8' },
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