import PropTypes from 'prop-types';
import SearchIcon from '../atoms/NavSearchIcon';

function DropdownSearchItem({ placeholderText, inputValue }) {
  return (
    <div className="nav-menu__search-item">
      <input type="text" className="nav-menu__search-item-input" placeholder={placeholderText} defaultValue={inputValue} />
      <button type="button" aria-label="Search">{SearchIcon}</button>
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
