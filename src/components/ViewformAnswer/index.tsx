import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import { QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

import Input from '../common/Input';
import { storeAnswer } from '../../store/form/formSlice';
import { RootState } from '../../store';

type Props = {
  id: number;
  type: QuestionType;
};

export default function ViewformAnswer({ id, type }: Props) {
  const { questionList } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  const answerWidthTable = {
    width: type === QUESTION_TYPE.단답형 ? '50%' : '100%',
  };

  return (
    <S.AnswerWrapper width={answerWidthTable.width}>
      <Input
        initialValue={questionList!.find((question) => question.id === id)?.answer ?? ''}
        placeholder='내 답변'
        handleInputChange={(answer: string | null) => dispatch(storeAnswer({ id, answer }))}
      />
    </S.AnswerWrapper>
  );
}

const S = {
  AnswerWrapper: styled.div<{ width: string }>`
    width: ${({ width }) => width};
    margin-top: 20px;

    input {
      padding: 8px 0;
    }
  `,
};
