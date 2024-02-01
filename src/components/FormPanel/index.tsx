import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { addSingleChoiceQuestion } from '../../store/form/formSlice';

import AddButtonIcon from '../../assets/svg/add-button.svg?react';
import Button from '../Button';

export default function FormPanel() {
  const dispatch = useDispatch();

  const addQuestion = () => dispatch(addSingleChoiceQuestion());

  return (
    <S.PanelWrapper>
      <S.Panel>
        <Button onClick={addQuestion}>
          <AddButtonIcon />
        </Button>
      </S.Panel>
    </S.PanelWrapper>
  );
}

const S = {
  PanelWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    height: 0;
  `,

  Panel: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -62px;
    width: 50px;
    height: 50px;
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
