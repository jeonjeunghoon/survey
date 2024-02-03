import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

import Input from '../common/Input';

type Props = {
  type: QuestionType;
};

export default function ViewformAnswer({ type }: Props) {
  const answerWidthTable = {
    width: type === QUESTION_TYPE.단답형 ? '50%' : '100%',
  };

  return (
    <S.AnswerWrapper width={answerWidthTable.width}>
      <Input placeholder='내 답변' />
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
