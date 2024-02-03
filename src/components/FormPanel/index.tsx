import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addSingleChoiceQuestion } from '../../store/form/formSlice';

import Button from '../common/Button';
import AddButtonIcon from '../../assets/svg/add-button.svg?react';
import EyeIcon from '../../assets/svg/eye.svg?react';

export default function FormPanel() {
  const dispatch = useDispatch();

  return (
    <S.PanelWrapper>
      <S.Panel>
        <Button onClick={() => dispatch(addSingleChoiceQuestion())}>
          <AddButtonIcon />
        </Button>
        <Link to='viewform' target='_blank'>
          <EyeIcon width='24px' height='24px' />
        </Link>
      </S.Panel>
    </S.PanelWrapper>
  );
}

const S = {
  PanelWrapper: styled.div`
    position: relative;
  `,

  Panel: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: absolute;
    right: -62px;
    padding: 8px;

    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
    background-color: white;
    box-shadow:
      0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
  `,
};
