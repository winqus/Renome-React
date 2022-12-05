import PropTypes from 'prop-types';
import Cart from '../molecules/Cart';
import CartIcon from '../atoms/NavCartIcon';
import VerticalLine from '../atoms/VerticalLine';
import HamburgerDropdown from './HamburgerDropdown';

function Navbar({ title }) {
  return (
    <header className="nav-menu nav-menu__header">
      <a href="/" className="nav-menu__title">{title}</a>
      <div className="nav-menu__icon-group">
        <Cart count={2} value="$44.50" icon={CartIcon} />
        <VerticalLine />
        <HamburgerDropdown />
      </div>
    </header>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
