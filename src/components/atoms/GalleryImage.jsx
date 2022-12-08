import PropTypes from 'prop-types';

function GalleryImage({ src, alt }) {
  return <img src={src} alt={alt} className="gallery__image" loading="lazy" />;
}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default GalleryImage;
