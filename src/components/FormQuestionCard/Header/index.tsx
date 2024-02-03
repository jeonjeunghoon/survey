import styled from '@emotion/styled';

import { QuestionType } from '../../../types/question';

import FormQuestion from '../../FormQuestion';
import QuestionTypeSelector from '../../QuestionTypeSelector';

type Props = {
  id: number;
  type: QuestionType;
  question: string;
  isFocus: boolean;
};

export default function Header({ id, type, question, isFocus }: Props) {
  return (
    <S.HeaderContainer>
      <FormQuestion id={id} question={question} isFocus={isFocus} />
      <QuestionTypeSelector id={id} type={type} />
    </S.HeaderContainer>
  );
}

const S = {
  HeaderContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};
