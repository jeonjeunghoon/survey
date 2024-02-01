import styled from '@emotion/styled';

import { DropdownMenu } from '../../../types/dropdown';
import { useDropdown } from '../../../hooks/useDropdown';

import MenuList from './MenuList';
import MenuItem from './MenuItem';

type Props = {
  dropdownMenuList: DropdownMenu[];
  defaultMenu?: Omit<DropdownMenu, 'handleClick'>;
};

export default function Dropdown({ dropdownMenuList, defaultMenu = dropdownMenuList[0] }: Props) {
  const { isOpen, selectedMenu, ref, isFocus, showMenu, closeMenu, changeSelectedMenu } =
    useDropdown(defaultMenu);

  return (
    <S.Container ref={ref}>
      {isOpen && isFocus && (
        <MenuList
          dropdownMenuList={dropdownMenuList}
          closeMenu={closeMenu}
          changeSelectedMenu={changeSelectedMenu}
        />
      )}
      <MenuItem icon={selectedMenu.icon} text={selectedMenu.text} handleMenuClick={showMenu} />
      <S.ArrowWrapper></S.ArrowWrapper>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;

    border-radius: 4px;
    border: 1px solid #dadce0;
    background-color: white;

    button {
      display: flex;
      justify-content: start;
      width: 100%;
      height: 100%;
    }
  `,

  ArrowWrapper: styled.div``,
};
