import PropTypes from 'prop-types';

function CartItem({ href, text }) {
  return <a href={href} className="nav-menu__cart-dropdown-item">{text}</a>;
}

CartItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CartItem;
