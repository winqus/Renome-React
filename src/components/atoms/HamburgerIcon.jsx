import PropTypes from 'prop-types';

function HamburgerIcon({ open }) {
  return (
    <i className={`nav-menu__icon icon-hamburger ${open ? 'icon-hamburger--active' : ''}`}>
      <div className="icon-hamburger__bars" />
    </i>
  );
}

HamburgerIcon.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default HamburgerIcon;
