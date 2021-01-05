import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { ImageWrapper, StyledImage } from './ImageSliderElements';

const LazyImage = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <LazyLoad once={true} style={{ height: 'inherit' }}>
        <StyledImage src={src} loading='lazy' alt={alt} draggable='false' />
      </LazyLoad>
    </ImageWrapper>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
