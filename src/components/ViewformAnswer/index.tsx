import styled from '@emotion/styled';

import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';
import { useViewformAnswer } from '../../hooks/useViewformAnswer';

import Input from '../common/Input';

type Props = {
  id: number;
};

export default function ViewformAnswer({ id }: Props) {
  const { type, initialAnswer, changeAnswer } = useViewformAnswer(id);
  const answerWidthTable = {
    width: type === QUESTION_TYPE.단답형 ? '50%' : '100%',
  };

  return (
    <S.AnswerWrapper width={answerWidthTable.width}>
      <Input initialValue={initialAnswer} placeholder='내 답변' handleInputChange={changeAnswer} />
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
