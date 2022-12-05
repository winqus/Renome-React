import PropTypes from 'prop-types';

function DropdownItem({ href, text }) {
  return (
    <a href={href} className="nav-menu__item">{text}</a>
  );
}

DropdownItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DropdownItem;
