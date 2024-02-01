import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';

import Answer from '../Answer';
import OptionList from '../OptionList';

type Props = {
  type: QuestionType;
  question: string;
  optionList: string[] | null;
};

export default function ViewQuestion({ type, question, optionList }: Props) {
  return (
    <>
      <S.QuestionText>{question}</S.QuestionText>
      {type === 'shortAnswer' || type === 'longAnswer' ? (
        <Answer type={type} />
      ) : (
        <OptionList type={type} optionList={optionList} />
      )}
    </>
  );
}

const S = {
  QuestionText: styled.p`
    font-size: 1.6rem;
    font-weight: 500;
  `,
};
