import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { editDescription } from '../../store/form/formSlice';

import Textarea from '../common/Textarea';

export default function FormDescriptionTextarea() {
  const { description } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <Textarea
        placeholder='설문지 설명'
        initialValue={description}
        handleTextareaChange={(value?: string) => dispatch(editDescription({ description: value }))}
      />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    margin-top: 4px;

    textarea {
      padding: 4px 0;
    }
  `,
};
