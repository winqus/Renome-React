import PropTypes from 'prop-types';
import DropdownItem from '../atoms/DropdownItem';
import DropdownSearchItem from './DropdownSearchItem';
import DropdownSubnavItem from './DropdownSubnavItem';
import { arrowLeftFeaturesIcon, arrowRightFeaturesIcon } from '../atoms/Icons';

function DropdownMenu({ open, activeMenu, onChangeMenu }) {
  return (
    <>
      <ul className={`nav-menu__list nav-menu__list--${open && activeMenu === 'main' ? 'show' : 'hide'}-vertical`}>
        <DropdownSearchItem placeholderText="Search..." />
        <DropdownItem href="#home" text="HOME" />
        <DropdownItem href="#about" text="ABOUT" />
        <DropdownItem href="#menu" text="MENU" />
        <DropdownItem href="#reservations" text="RESERVATIONS" />
        <DropdownItem href="#blog" text="BLOG" />
        <DropdownSubnavItem href="#features" text="FEATURES" onClick={() => onChangeMenu('features')} icon={arrowRightFeaturesIcon} />
        <DropdownItem href="#shop" text="SHOP" />
        <DropdownItem href="#contact" text="CONTACT" />
      </ul>
      <ul className={`nav-menu__list nav-menu__list--${open && activeMenu === 'features' ? 'show' : 'hide'}-horizontal`}>
        <DropdownSubnavItem href="./#" text="BACK" onClick={() => onChangeMenu('main')} icon={arrowLeftFeaturesIcon} iconOnLeft />
        <DropdownItem href="#onepage" text="One page" />
        <DropdownItem href="#portfolio" text="Portfolio" />
        <DropdownItem href="#shortcodes" text="Shortcodes" />
      </ul>
    </>
  );
}

DropdownMenu.defaultProps = {
  open: false,
};

DropdownMenu.propTypes = {
  open: PropTypes.bool,
  activeMenu: PropTypes.string.isRequired,
  onChangeMenu: PropTypes.func.isRequired,
};

export default DropdownMenu;
