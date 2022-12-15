import PropTypes from 'prop-types';
import { navSearchIcon } from '../atoms/Icons';

function DropdownSearchItem({ placeholderText, inputValue }) {
  return (
    <div className="nav-menu__search-item">
      <input type="text" className="nav-menu__search-item-input" placeholder={placeholderText} defaultValue={inputValue} />
      <button type="button" aria-label="Search">{navSearchIcon}</button>
    </div>
  );
}

DropdownSearchItem.defaultProps = {
  placeholderText: '',
  inputValue: '',
};

DropdownSearchItem.propTypes = {
  placeholderText: PropTypes.string,
  inputValue: PropTypes.string,
};

export default DropdownSearchItem;
