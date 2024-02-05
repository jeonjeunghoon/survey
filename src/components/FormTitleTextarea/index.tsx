import styled from '@emotion/styled';

import { useSelector, useDispatch } from 'react-redux';
import { currentFocusedCardIdSelector, titleSelector } from '../../store/form/selectors';
import { editTitle } from '../../store/form/formSlice';

import Textarea from '../common/Textarea';

export default function FormTitleTextarea() {
  const title = useSelector(titleSelector);
  const currentFocusedCardId = useSelector(currentFocusedCardIdSelector);
  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <Textarea
        fontSize='3.6rem'
        placeholder='설문지 제목'
        initialValue={title}
        handleTextareaChange={(value: string) => dispatch(editTitle({ title: value }))}
        hasBorderBottom={currentFocusedCardId === null}
        borderColor='#e0e0e0'
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
