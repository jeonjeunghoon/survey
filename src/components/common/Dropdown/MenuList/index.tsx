import styled from '@emotion/styled';

import { DropdownMenu } from '../../../../types/dropdown';

import MenuItem from '../MenuItem';

type Props = {
  dropdownMenuList: DropdownMenu[];
  isShowing: boolean;
  closeMenu: () => void;
  changeSelectedMenu: (menu: DropdownMenu) => void;
};

export default function MenuList({
  dropdownMenuList,
  isShowing,
  closeMenu,
  changeSelectedMenu,
}: Props) {
  if (!isShowing) return null;

  return (
    <S.List>
      {dropdownMenuList.map((menu) => {
        const handleMenuClick = () => {
          closeMenu();

          if (menu.handleClick && menu.type) menu.handleClick(menu.type);

          changeSelectedMenu(menu);
        };

        return (
          <MenuItem
            key={menu.text}
            icon={menu.icon}
            text={menu.text}
            handleMenuClick={handleMenuClick}
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

    li {
      padding: 0 8px;
    }
  `,
};
