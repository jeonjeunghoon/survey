import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';

import TextArea from '../common/TextArea';
import { editDescription, editTitle } from '../../store/form/formSlice';

export default function FormTitle() {
  const { title, description } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const changeTitle = (value?: string) => {
    if (value === undefined) return;

    dispatch(editTitle({ title: value }));
  };

  const changeDescription = (value?: string) => {
    if (value === undefined) return;

    dispatch(editDescription({ description: value }));
  };

  return (
    <S.InputContainer>
      <S.Title>
        <TextArea
          fontSize='3.6rem'
          placeholder='설문지 제목'
          initialValue={title}
          handleTextareaChange={changeTitle}
        />
      </S.Title>
      <S.Description>
        <TextArea
          placeholder='설문지 설명'
          initialValue={description}
          handleTextareaChange={changeDescription}
        />
      </S.Description>
    </S.InputContainer>
  );
}

const S = {
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 22px 24px 24px 24px;
  `,

  Title: styled.div`
    display: flex;
    flex: 1;
    margin-top: 8px;
    padding-bottom: 8px;

    input {
      padding: 8px 0;
    }
  `,

  Description: styled.div`
    margin-top: 4px;

    input {
      padding: 4px 0;
    }
  `,
};
