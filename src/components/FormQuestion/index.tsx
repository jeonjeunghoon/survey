import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  currentFocusedCardIdSelector,
  isFocusSelectorById,
  selectQuestionById,
} from '../../store/form/selectors';
import { editQuestion } from '../../store/form/formSlice';

import Textarea from '../common/Textarea';

type Props = {
  id: number;
};

export default function FormQuestion({ id }: Props) {
  const question = useSelector(selectQuestionById(id));
  const currentFocusedCardId = useSelector(currentFocusedCardIdSelector);
  const isFocus = useSelector(isFocusSelectorById(id));
  const dispatch = useDispatch();

  return (
    <S.QuestionWrapper key={currentFocusedCardId}>
      {isFocus ? (
        <Textarea
          fontSize='2rem'
          initialValue={question}
          backgroundColor='#F2F2F2'
          margin='16px'
          placeholder='질문'
          initialFocus={id === currentFocusedCardId}
          handleTextareaChange={(value: string) => dispatch(editQuestion({ id, question: value }))}
        />
      ) : (
        <S.QuestionText>{question ? question : '질문'}</S.QuestionText>
      )}
    </S.QuestionWrapper>
  );
}

const S = {
  QuestionWrapper: styled.div`
    min-width: 446px;

    textarea {
      padding: 8px 0;
    }
  `,

  QuestionText: styled.p`
    font-size: 2rem;
    font-weight: 400;
  `,
};
