import React from 'react';
import './Slider.css';
import { Carousel, CarouselItem } from 'react-bootstrap';

const ImageSlider = ({ images, interval, fade }) => {
  return (
    <div className='SliderConatiner'>
      <Carousel
        interval={interval}
        fade={fade}
        prevIcon={
          images &&
          images.length > 1 && (
            <span aria-hidden='true' className='carousel-control-prev-icon' />
          )
        }
        nextIcon={
          images &&
          images.length > 1 && (
            <span aria-hidden='true' className='carousel-control-next-icon' />
          )
        }
      >
        {images.map((img, index) => {
          return (
            <CarouselItem key={index}>
              <img src={img.imageURL} alt={`Slide${index}`} className='image' />
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
