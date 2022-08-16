import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../images/image1.webp'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import './carousel.css'

export const CarouselComp=()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src={image3}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>One stop shop</h3>
          <p>All the cricketing gears, to enhance your career.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={image1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Choose from the best willow's</h3>
          <p>The bats that can help you hit miles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={image2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Enjoy the game</h3>
          <p>
          Let us take care of the gears.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
