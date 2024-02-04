import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionById } from '../../store/form/selectors';
import { editQuestion } from '../../store/form/formSlice';

import Textarea from '../common/Textarea';

type Props = {
  id: number;
  isFocus: boolean;
};

export default function FormQuestion({ id, isFocus }: Props) {
  const question = useSelector(selectQuestionById(id));
  const dispatch = useDispatch();

  return (
    <S.QuestionWrapper>
      <Textarea
        fontSize='2rem'
        initialValue={question}
        backgroundColor='#F2F2F2'
        margin='16px'
        placeholder='질문'
        isFocus={isFocus}
        handleTextareaChange={(value: string) => dispatch(editQuestion({ id, question: value }))}
      />
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
};
