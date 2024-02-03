import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

type Props = {
  type: QuestionType;
};

export default function FormAnswer({ type }: Props) {
  const answerTable = {
    width: type === QUESTION_TYPE.단답형 ? '50%' : '90%',
    text: type === QUESTION_TYPE.단답형 ? '단답형 텍스트' : '장문형 텍스트',
  };

  return (
    <S.AnswerWrapper width={answerTable.width}>
      <S.AnswerText>{answerTable.text}</S.AnswerText>
    </S.AnswerWrapper>
  );
}

const S = {
  AnswerWrapper: styled.div<{ width: string }>`
    width: ${({ width }) => width};
    margin-top: 24px;

    border-bottom: 1px dotted #dadce0;
    cursor: default;
  `,

  AnswerText: styled.p`
    margin: 4px 0;

    line-height: 20px;
    font-size: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.2px;
    color: #70757a;
  `,
};
