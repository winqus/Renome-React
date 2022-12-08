import PropTypes from 'prop-types';

function CarouselSlide({
  title, subtitle, imageSrc, altText, imageRef,
}) {
  return (
    <li className="carousel__slide">
      <img ref={imageRef} className="carousel__image" src={imageSrc} alt={altText} />
      <div className="carousel__image-overlay-blue" />
      <div className="carousel__text-wrapper">
        <h1 className="carousel__title">{title}</h1>
        <h1 className="carousel__subtitle">{subtitle}</h1>
      </div>
    </li>
  );
}

CarouselSlide.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  imageRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLImageElement) }),
};

CarouselSlide.defaultProps = {
  imageRef: null,
};

export default CarouselSlide;
