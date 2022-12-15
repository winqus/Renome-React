/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import GalleryImage from '../atoms/GalleryImage';

function Gallery({ title, subtitle, images }) {
  return (
    <section className="gallery">
      <h1 className="gallery__title">{title}</h1>
      <h2 className="gallery__subtitle">{subtitle}</h2>
      <div className="gallery__image-container">
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.path} alt={image.alt} />
        ))}
      </div>
    </section>
  );
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
};

export default Gallery;
