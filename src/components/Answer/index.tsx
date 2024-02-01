import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';

type Props = {
  type: QuestionType;
};

export default function Answer({ type }: Props) {
  return (
    <S.AnswerWrapper>
      <S.AnswerText>{type === 'shortAnswer' ? '단답형 텍스트' : '장문형 텍스트'}</S.AnswerText>
    </S.AnswerWrapper>
  );
}

const S = {
  AnswerWrapper: styled.div`
    width: 100%;
    height: 54px;
  `,

  AnswerText: styled.p`
    line-height: 20px;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 0.2px;
    color: #70757a;
  `,
};
