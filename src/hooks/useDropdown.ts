import { useState } from 'react';

import { useCheckFocusingDiv } from './useCheckFocusingDiv';
import { DropdownMenu } from '../types/dropdown';

export const useDropdown = (defaultMenu: DropdownMenu) => {
  const [selectedMenu, setSelectedMenu] = useState(defaultMenu);
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isFocus } = useCheckFocusingDiv(false);

  const showMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  const changeSelectedMenu = (menu: DropdownMenu) => setSelectedMenu(menu);

  return { isOpen, selectedMenu, ref, isFocus, showMenu, closeMenu, changeSelectedMenu };
};
