import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { ImageWrapper, Placeholder, StyledImage } from './ImageSliderElements';

const LazyImage = ({ src, alt }) => {
  const refPlaceholder = React.useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };
  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad once={true} style={{ height: 'inherit' }}>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
