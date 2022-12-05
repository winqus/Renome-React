import PropTypes from 'prop-types';

function DropdownSubnavItem({
  href, text, icon, iconOnLeft, onClick,
}) {
  return (
    <div role="button" onClick={onClick} onKeyPress={() => {}} tabIndex="0" id="featuresBtn" className="nav-menu__item">
      {!iconOnLeft && (<a href={href}>{text}</a>)}
      <button type="button" className="nav-menu__button" aria-label="OpenNav">
        {icon}
      </button>
      {iconOnLeft && (<a href={href}>{text}</a>)}
    </div>
  );
}

DropdownSubnavItem.defaultProps = {
  iconOnLeft: false,
};

DropdownSubnavItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  iconOnLeft: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default DropdownSubnavItem;
