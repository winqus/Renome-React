import { useState, useRef, useEffect } from 'react';
import HamburgerIcon from '../atoms/HamburgerIcon';
import NavButton from '../atoms/NavButton';
import DropdownMenu from '../molecules/DropdownMenu';

function HamburgerDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen);

    if (!isOpen) {
      setCurrentMenu('main');
    }
  }, [isOpen]);

  const wrapperRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <NavButton onClick={() => setIsOpen(!isOpen)} isRightmost>
        <HamburgerIcon open={isOpen} />
      </NavButton>

      <DropdownMenu open={isOpen} activeMenu={currentMenu} onChangeMenu={setCurrentMenu} />
    </div>
  );
}

export default HamburgerDropdown;
