import styled from '@emotion/styled';

import { QUESTION_TYPE } from '../../constants/question';
import { useViewformAnswer } from '../../hooks/useViewformAnswer';

import Input from '../common/Input';

type Props = {
  id: number;
  disabled?: boolean;
};

export default function ViewformAnswer({ id, disabled = false }: Props) {
  const { type, initialAnswer, changeAnswer } = useViewformAnswer(id);
  const answerWidthTable = {
    width: type === QUESTION_TYPE.단답형 ? '50%' : '100%',
  };

  return (
    <S.AnswerWrapper width={answerWidthTable.width}>
      <Input
        initialValue={initialAnswer}
        placeholder='내 답변'
        handleInputChange={changeAnswer}
        disabled={disabled}
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
