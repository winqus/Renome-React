import PropTypes from 'prop-types';

function NavButton({ onClick, children, isRightmost }) {
  return (
    <button type="button" onClick={onClick} className={`nav-menu__btn ${isRightmost && 'nav-menu__btn--rightMost'}`}>
      {children}
    </button>
  );
}

NavButton.defaultProps = {
  isRightmost: false,
};

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isRightmost: PropTypes.bool,
};

export default NavButton;
