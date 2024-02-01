import styled from '@emotion/styled';

import { DropdownMenu } from '../../../../types/dropdown';

import Button from '../../Button';

type Props = {
  handleMenuClick: () => void;
} & Omit<DropdownMenu, 'type' | 'handleClick'>;

export default function MenuItem({ icon, text, handleMenuClick }: Props) {
  return (
    <S.Item>
      <Button onClick={handleMenuClick}>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <S.Text>{text}</S.Text>
      </Button>
    </S.Item>
  );
}

const S = {
  Item: styled.li`
    width: 100%;
    height: 100%;

    button {
      display: flex;
      justify-content: start;
      gap: 8px;
      width: 100%;
      height: 100%;
    }
  `,

  IconWrapper: styled.div`
    width: 24px;
    height: 24px;
  `,

  Text: styled.p`
    font-size: 1.6rem;
    line-height: 48px;
    letter-spacing: 0.2px;
  `,
};
