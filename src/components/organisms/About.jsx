import PropTypes from 'prop-types';

function About({
  title, subtitle, text, images,
}) {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={images[0].path} alt={images[0].alt} className="about__image about__image--right" loading="lazy" />
        <img src={images[1].path} alt={images[1].alt} className="about__image about__image--left about__image--on-top" loading="lazy" />
      </div>
      <h1 className="about__title">{title}</h1>
      <h2 className="about__subtitle">{subtitle}</h2>
      <p className="about__text">
        {text}
      </p>
    </section>
  );
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })).isRequired,
};

export default About;
