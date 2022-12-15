import PropTypes from 'prop-types';

function About({ title, subtitle, text }) {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={`${process.env.PUBLIC_URL}/img/about_img_1.png`} alt="Several white houses" className="about__image about__image--right" loading="lazy" />
        <img src={`${process.env.PUBLIC_URL}/img/about_img_2.png`} alt="Building seen through tree leaves" className="about__image about__image--left about__image--on-top" loading="lazy" />
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
};

export default About;
