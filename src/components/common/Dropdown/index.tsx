import styled from '@emotion/styled';

import { DropdownMenu } from '../../../types/dropdown';
import { useDropdown } from '../../../hooks/useDropdown';

import MenuList from './MenuList';
import MenuItem from './MenuItem';
import DownArrowIcon from '../../../assets/svg/down-arrow.svg?react';

type Props = {
  dropdownMenuList: DropdownMenu[];
  defaultMenu?: Omit<DropdownMenu, 'handleClick'>;
};

export default function Dropdown({ dropdownMenuList, defaultMenu = dropdownMenuList[0] }: Props) {
  const { isOpen, selectedMenu, ref, isFocus, showMenu, closeMenu, changeSelectedMenu } =
    useDropdown(defaultMenu);

  return (
    <S.Container ref={ref}>
      <MenuList
        dropdownMenuList={dropdownMenuList}
        closeMenu={closeMenu}
        changeSelectedMenu={changeSelectedMenu}
        isShowing={isOpen && isFocus}
      />
      <S.DefaultContainer onClick={showMenu}>
        <MenuItem icon={selectedMenu.icon} text={selectedMenu.text} />
        <S.ArrowWrapper>
          <DownArrowIcon />
        </S.ArrowWrapper>
      </S.DefaultContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    padding: 0 8px;

    border-radius: 4px;
    border: 1px solid #dadce0;
    background-color: white;
    cursor: pointer;
  `,

  DefaultContainer: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  `,

  ArrowWrapper: styled.div`
    width: 20px;
    height: 20px;
  `,
};
