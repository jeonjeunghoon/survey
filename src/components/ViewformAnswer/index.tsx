import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { selectQuestionTypeById } from '../../store/form/selectors';

import { useDisabled } from '../../hooks/useDisabled';
import { QUESTION_TYPE } from '../../constants/question';
import { useViewformAnswer } from '../../hooks/useViewformAnswer';

import Input from '../common/Input';

type Props = {
  id: number;
};

export default function ViewformAnswer({ id }: Props) {
  const { answer, changeAnswer } = useViewformAnswer(id);
  const type = useSelector(selectQuestionTypeById(id));
  const answerWidthTable = {
    width: type === QUESTION_TYPE.단답형 ? '50%' : '100%',
  };
  const isDisabled = useDisabled();

  return (
    <S.AnswerWrapper width={answerWidthTable.width}>
      <Input
        initialValue={answer}
        placeholder='내 답변'
        handleInputChange={changeAnswer}
        disabled={isDisabled}
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
