import PropTypes from 'prop-types';
import Cart from '../molecules/Cart';
import { navCartIcon } from '../atoms/Icons';
import VerticalLine from '../atoms/VerticalLine';
import HamburgerDropdown from './HamburgerDropdown';

function Navbar({ title, cartCount, cartValue }) {
  return (
    <header className="nav-menu nav-menu__header">
      <a href="./" className="nav-menu__title">{title}</a>
      <div className="nav-menu__icon-group">
        <Cart count={cartCount} value={cartValue} icon={navCartIcon} />
        <VerticalLine />
        <HamburgerDropdown />
      </div>
    </header>
  );
}

Navbar.defaultProps = {
  cartCount: 0,
  cartValue: '$0.00',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  cartCount: PropTypes.number,
  cartValue: PropTypes.string,
};

export default Navbar;
