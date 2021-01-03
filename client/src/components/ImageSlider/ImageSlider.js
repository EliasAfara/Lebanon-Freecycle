import React from 'react';
import './Slider.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import LazyImage from './LazyImage';

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
              {index === 0 ? (
                <LazyImage src={img.imageURL} alt={`Slide${index}`} />
              ) : (
                <img
                  src={img.imageURL}
                  alt={`Slide${index}`}
                  className='image'
                />
              )}
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
