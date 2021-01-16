import React from 'react';
import './Slider.css';
// import { Carousel, CarouselItem } from 'react-bootstrap';
// import LazyImage from './LazyImage';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '2px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '2px' }}
      onClick={onClick}
    />
  );
}

const ImageSlider = ({ images, interval, fade }) => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          nextArrow: <></>,
          prevArrow: <></>,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          nextArrow: <></>,
          prevArrow: <></>,
          infinite: false,
        },
      },
    ],
  };
  return (
    <div className='SliderConatiner'>
      <Slider {...settings}>
        {images.map((img, index) => {
          return (
            <div
              key={index}
              style={{
                height: '100%',
              }}
            >
              <img
                src={img.imageURL}
                loading='lazy'
                alt={`Slide${index}`}
                className='image'
                draggable='false'
                width='700'
                height='400'
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default React.memo(ImageSlider);
