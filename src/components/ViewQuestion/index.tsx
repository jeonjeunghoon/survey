import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';

import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

import Answer from '../Answer';
import OptionList from '../OptionList';

type Props = {
  id: number;
  type: QuestionType;
  question: string;
  optionList: string[] | null;
  hasOtherOption: boolean;
};

export default function ViewQuestion({ id, type, question, optionList, hasOtherOption }: Props) {
  return (
    <>
      <S.QuestionText>{question ? question : '질문'}</S.QuestionText>
      {type === QUESTION_TYPE.단답형 || type === QUESTION_TYPE.장문형 ? (
        <Answer type={type} />
      ) : (
        <OptionList id={id} type={type} optionList={optionList} hasOtherOption={hasOtherOption} />
      )}
    </>
  );
}

const S = {
  QuestionText: styled.p`
    font-size: 2rem;
    font-weight: 400;
  `,
};
