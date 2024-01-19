import React, { useState } from 'react';
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const text = activeIndex + 1 + "/" + images.length + 1

  return (
    <div className="carousel">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel_img"
      ></img>
      <p className='carousel_nbr'>{activeIndex + 1}/{images.length}</p>
      <FontAwesomeIcon onClick={prevSlide} className="carousel_btn carousel_btn--prev fa-5x" icon={faChevronLeft} />
      <FontAwesomeIcon onClick={nextSlide} className="carousel_btn carousel_btn--next fa-5x" icon={faChevronRight} />
    </div>
  );
};

export default Carousel;