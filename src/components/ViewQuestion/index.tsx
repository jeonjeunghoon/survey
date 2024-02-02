import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';

import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

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
      <S.QuestionText>{question ? question : '질문'}</S.QuestionText>
      {type === QUESTION_TYPE.단답형 || type === QUESTION_TYPE.장문형 ? (
        <Answer type={type} />
      ) : (
        <OptionList type={type} optionList={optionList} />
      )}
    </>
  );
}

const S = {
  QuestionText: styled.p`
    font-size: 2rem;
    font-weight: 500;
  `,
};
