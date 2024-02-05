import { useEffect, useState } from 'react';

import { useCheckFocusingDiv } from './useCheckFocusingDiv';
import { DropdownMenu } from '../types/dropdown';

export const useDropdown = (defaultMenu: Omit<DropdownMenu, 'handleClick'>) => {
  const [selectedMenu, setSelectedMenu] = useState(defaultMenu);
  const [isOpen, setIsOpen] = useState(false);
  const { divRef, isFocus } = useCheckFocusingDiv(false);

  const showMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  const changeSelectedMenu = (menu: DropdownMenu) => setSelectedMenu(menu);

  useEffect(() => {
    setSelectedMenu(defaultMenu);
  }, [defaultMenu]);

  return { isOpen, selectedMenu, divRef, isFocus, showMenu, closeMenu, changeSelectedMenu };
};
