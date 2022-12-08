import PropTypes from 'prop-types';
import GalleryImage from '../atoms/GalleryImage';

function Gallery({ title, subtitle, children }) {
  return (
    <section className="gallery">
      <h1 className="gallery__title">{title}</h1>
      <h2 className="gallery__subtitle">{subtitle}</h2>
      <div className="gallery__image-container">
        {children}
      </div>
    </section>
  );
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([GalleryImage]),
  })).isRequired,
};

export default Gallery;
