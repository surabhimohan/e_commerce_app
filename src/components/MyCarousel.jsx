import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 

export default function MyCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="img/slideshow/p1.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="img/slideshow/p2.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slideshow/p3.webp"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slideshow/p4.webp"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
