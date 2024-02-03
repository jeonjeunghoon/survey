import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';

import { isRenderAnswer } from '../../constants/option';

import Card from '../Card';
import ViewformAnswer from '../ViewformAnswer';
import ViewformOptionList from '../ViewformOptionList';

type Props = {
  id: number;
  type: QuestionType;
  question: string;
  optionList: string[] | null;
  hasOtherOption: boolean;
  isRequired: boolean;
};

export default function ViewformQuestionCard({
  id,
  type,
  question,
  optionList,
  hasOtherOption,
  isRequired,
}: Props) {
  return (
    <Card>
      <S.Container>
        <S.TextContainer>
          <S.QuestionText>{question}</S.QuestionText>
          <S.RequiredText>{isRequired ? '*' : ''}</S.RequiredText>
        </S.TextContainer>
        {isRenderAnswer(type) ? (
          <ViewformAnswer id={id} type={type} />
        ) : (
          <ViewformOptionList type={type} optionList={optionList} hasOtherOption={hasOtherOption} />
        )}
      </S.Container>
    </Card>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    padding: 24px 24px 24px 24px;
  `,

  TextContainer: styled.div`
    display: flex;
    gap: 4px;
  `,

  RequiredText: styled.p`
    font-size: 2rem;
    font-weight: 400;
    color: red;
  `,

  QuestionText: styled.p`
    font-size: 2rem;
    font-weight: 400;
  `,
};
