import styled from '@emotion/styled';

import AddButtonIcon from '../../assets/svg/add-button.svg?react';
import Button from '../Button';

export default function AddQuestionPanel() {
  const addQuestion = () => {
    // TODO: 리덕스 스토어에 데이터 푸시.
  };

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
    border-radius: 8px;

    background-color: white;

    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `,
};
