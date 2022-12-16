/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CarouselButtons from '../molecules/CarouselButtons';
import CarouselSlide from '../molecules/CarouselSlide';

function Carousel({ slidesData }) {
  const [slidePositionIndex, setSlidePositionIndex] = useState(0);
  const [carouselSlidable, setCarouselSlidable] = useState(true);
  const [animated, setAnimated] = useState(true);
  const [carouselHeight, setCarouselHeight] = useState('0px');
  const [trackTranslate, setTrackTranslate] = useState('0px');

  const trackRef = useRef(null);
  const imgRef = useRef(null);

  const getNonNegativeArrayIndex = (index, arraySize) => (
    ((index % arraySize) + arraySize) % arraySize
  );

  const setSlidePosition = (slide, index) => {
    // eslint-disable-next-line no-param-reassign
    slide.style.left = `${imgRef.current.width * index}px`;
  };

  const positionSlides = () => {
    const slides = trackRef.current.children;
    for (let index = 0; index < slides.length; index += 1) {
      setSlidePosition(
        slides[getNonNegativeArrayIndex(slidePositionIndex + index, slides.length)],
        slidePositionIndex + index,
      );
    }
  };

  const moveToSlide = (slide) => {
    setTrackTranslate(`-${slide.style.left}`.replace('--', ''));
  };

  const instantMoveToSlide = (slide) => {
    setAnimated(false);
    moveToSlide(slide);
    setTimeout(() => { setAnimated(true); }, 10);
  };

  const startCarouselTimeout = async (milliseconds) => {
    if (carouselSlidable) {
      await setCarouselSlidable(false);
      setTimeout(() => { setCarouselSlidable(true); }, milliseconds);
    }
  };

  const handleSlideChange = async (newSlidePositionIndex) => {
    if (carouselSlidable) {
      await setSlidePositionIndex(newSlidePositionIndex);
    }
    await startCarouselTimeout(400);
  };

  useEffect(() => {
    const slides = trackRef.current.children;

    if ((carouselSlidable) && slides.length > 1) {
      setSlidePosition(
        slides[getNonNegativeArrayIndex(slidePositionIndex, slides.length)],
        slidePositionIndex,
      );
      moveToSlide(slides[getNonNegativeArrayIndex(slidePositionIndex, slides.length)]);
    }
  }, [slidePositionIndex, carouselHeight]);

  useEffect(() => {
    const handleResize = (event) => {
      const slides = trackRef.current.children;
      setCarouselHeight(`${imgRef.current.height}px`);
      positionSlides();
      instantMoveToSlide(slides[getNonNegativeArrayIndex(slidePositionIndex, slides.length)]);
    };
    imgRef.current.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    return () => {
      imgRef.current.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, [imgRef, carouselHeight, slidePositionIndex]);

  return (
    <section className="carousel" style={{ height: carouselHeight }}>
      <div className="carousel__slide-track-container">
        <ul
          ref={trackRef}
          className={`carousel__slide-track ${(animated ? 'carousel__slide-track--sliding' : '')}`}
          style={{ transform: `translateX(${trackTranslate})` }}
        >
          {slidesData.map((slide, index) => (
            <CarouselSlide
              key={index}
              title={slide.title}
              subtitle={slide.subtitle}
              altText={slide.alt}
              imageSrc={slide.path}
              imageRef={index === 0 ? imgRef : null}
            />
          ))}
        </ul>
      </div>

      <CarouselButtons
        onClickLeft={() => handleSlideChange(slidePositionIndex - 1)}
        onClickRight={() => handleSlideChange(slidePositionIndex + 1)}
      />
    </section>
  );
}

Carousel.propTypes = {
  slidesData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
};

export default Carousel;
