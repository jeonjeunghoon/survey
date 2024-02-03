import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { editTitle } from '../../store/form/formSlice';

import Textarea from '../common/Textarea';

export default function FormTitleTextarea() {
  const { title } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <Textarea
        fontSize='3.6rem'
        placeholder='설문지 제목'
        initialValue={title}
        handleTextareaChange={(value?: string) => dispatch(editTitle({ title: value }))}
        hasBorderBottom={false}
      />
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex: 1;
    margin: 8px 24px 0 24px;
    padding-bottom: 8px;

    textarea {
      padding: 8px 0;
    }
  `,
};
