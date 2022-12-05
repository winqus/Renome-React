import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../atoms/CartItem';
import NavButton from '../atoms/NavButton';

function Cart({ count, value, icon }) {
  const [isClicked, setIsClicked] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="nav-menu__cart-dropdown">
      <NavButton onClick={() => setIsClicked(!isClicked)}>
        {icon}
        <div className="nav-menu__btnText">{count}</div>
      </NavButton>
      <ul id="cartDropdown" className={`nav-menu__cart-dropdown-content ${isClicked && 'nav-menu__cart-dropdown-content--show'}`}>
        <li className="nav-menu__cart-dropdown-item nav-menu__cart-dropdown-item--non-selectable">{value}</li>
        <CartItem href="#cart" text="View Cart" />
        <CartItem href="#checkout" text="Checkout" />
      </ul>
    </div>
  );
}

Cart.propTypes = {
  count: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Cart;
