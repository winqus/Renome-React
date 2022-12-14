import PropTypes from 'prop-types';

function CarouselButtons({ onClickLeft, onClickRight }) {
  return (
    <div className="carousel__buttons">
      <button type="button" onClick={onClickLeft} className="carousel__btn" aria-label="Carousel Left">
        <i className="icon-arrow-left" />
      </button>
      <button type="button" onClick={onClickRight} className="carousel__btn" aria-label="Carousel Right">
        <i className="icon-arrow-right" />
      </button>
    </div>
  );
}

CarouselButtons.propTypes = {
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired,
};

export default CarouselButtons;
