/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import CarouselButtons from '../molecules/CarouselButtons';
import CarouselSlide from '../molecules/CarouselSlide';

function Carousel() {
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

    return () => {
      document.removeEventListener('resize', handleResize);
      imgRef.current.removeEventListener('load', handleResize);
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
          <CarouselSlide
            key={0}
            title="made with love"
            subtitle="for you"
            imageSrc={`${process.env.PUBLIC_URL}/img/carousel_img_1.png`}
            altText="eggs and chicken"
            imageRef={imgRef}
          />
          <CarouselSlide
            key={1}
            title="made with hate"
            subtitle="for myself"
            imageSrc={`${process.env.PUBLIC_URL}/img/carousel_img_2.png`}
            altText="something more"
          />
          <CarouselSlide
            key={2}
            title="oranges and laptops"
            subtitle="for everyone"
            imageSrc={`${process.env.PUBLIC_URL}/img/carousel_img_3.png`}
            altText="oranges and laptops"
          />
        </ul>
      </div>

      <CarouselButtons
        onClickLeft={() => handleSlideChange(slidePositionIndex - 1)}
        onClickRight={() => handleSlideChange(slidePositionIndex + 1)}
      />
    </section>
  );
}

export default Carousel;
