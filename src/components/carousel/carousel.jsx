import React, { useState, useEffect } from 'react';
import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lengthImg, setLengthImg] = useState(false);

  useEffect(() => {
    if (images.length > 1) {
      setLengthImg(true)
    }
  }, [images.length]);

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

  return (
    <div className="carousel">
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel_img"
      ></img>
      <p className='carousel_nbr'>{activeIndex + 1}/{images.length}</p>
      {lengthImg ? (
        <div>
         <FontAwesomeIcon onClick={prevSlide} className="carousel_btn carousel_btn--prev fa-5x" icon={faChevronLeft} />
        <FontAwesomeIcon onClick={nextSlide} className="carousel_btn carousel_btn--next fa-5x" icon={faChevronRight} />
        </div>
      ):('')}
    
    </div>
  );
};

export default Carousel;