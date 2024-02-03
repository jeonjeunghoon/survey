import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { deleteQuestion, pasteQuestion, toggleRequired } from '../../../store/form/formSlice';

import Button from '../../common/Button';
import PasteIcon from '../../../assets/svg/copy-document.svg?react';
import TrashcanIcon from '../../../assets/svg/trash.svg?react';

type Props = {
  id: number;
};

export default function Footer({ id }: Props) {
  const dispatch = useDispatch();

  return (
    <S.FooterContainer>
      <Button onClick={() => dispatch(pasteQuestion({ id }))}>
        <PasteIcon width='24px' height='24px' />
      </Button>
      <Button onClick={() => dispatch(deleteQuestion({ id }))}>
        <TrashcanIcon width='24px' height='24px' />
      </Button>
      <Button onClick={() => dispatch(toggleRequired({ id }))}>필수</Button>
    </S.FooterContainer>
  );
}

const S = {
  FooterContainer: styled.div`
    display: flex;
    gap: 20px;
    justify-content: end;
    align-items: center;
    margin-top: 32px;
  `,
};
