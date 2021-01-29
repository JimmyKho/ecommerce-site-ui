import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"

const PageCarousel = (props) => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src="/carousel1.jpg" />
    </Carousel.Item>

    <Carousel.Item>
      <img className="d-block w-100" src="/carousel2.jpg" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src="/carousel3.jpg" />
    </Carousel.Item>
  </Carousel>
)

export default PageCarousel
