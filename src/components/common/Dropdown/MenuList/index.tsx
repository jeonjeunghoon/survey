import styled from '@emotion/styled';

import { DropdownMenu } from '../../../../types/dropdown';

import MenuItem from '../MenuItem';

type Props = {
  dropdownMenuList: DropdownMenu[];
  closeMenu: () => void;
  changeSelectedMenu: (menu: DropdownMenu) => void;
};

export default function MenuList({ dropdownMenuList, closeMenu, changeSelectedMenu }: Props) {
  return (
    <S.List>
      {dropdownMenuList.map((menu) => {
        const handleMenuClick = () => {
          closeMenu();
          menu.handleClick();
          changeSelectedMenu(menu);
        };

        return (
          <MenuItem
            key={menu.text}
            icon={menu.icon}
            text={menu.text}
            handleClick={handleMenuClick}
          />
        );
      })}
    </S.List>
  );
}

const S = {
  List: styled.ul`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -1px;
    width: calc(100% + 9px);

    border-radius: 4px;
    border: 1px solid #dadce0;
    background-color: white;
    z-index: 1;
  `,
};
