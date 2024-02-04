import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import { QuestionType } from '../../types/question';

import Card from '../Card';
import ViewformAnswer from '../ViewformAnswer';
import ViewformDropdown from '../ViewformDropdown';
import ViewformCheckbox from '../ViewformCheckbox';
import ViewformRadio from '../ViewformRadio';
import { QUESTION_TYPE } from '../../constants/question';

type Props = {
  id: number;
  type: QuestionType;
  disabled?: boolean;
};

export default function ViewformQuestionCard({ id, type, disabled = false }: Props) {
  const { question, isRequired } = useSelector(
    (state: RootState) => state.form.questionList.find((question) => question.id === id)!,
  );

  const ANSWER_RENDER_TABLE = {
    [QUESTION_TYPE.단답형]: <ViewformAnswer id={id} disabled={disabled} />,
    [QUESTION_TYPE.장문형]: <ViewformAnswer id={id} disabled={disabled} />,
    [QUESTION_TYPE.객관식질문]: <ViewformRadio id={id} disabled={disabled} />,
    [QUESTION_TYPE.체크박스]: <ViewformCheckbox id={id} disabled={disabled} />,
    [QUESTION_TYPE.드롭다운]: <ViewformDropdown id={id} disabled={disabled} />,
  };

  return (
    <Card>
      <S.Container>
        <S.TextContainer>
          <S.QuestionText>{question}</S.QuestionText>
          <S.RequiredText>{isRequired ? '*' : ''}</S.RequiredText>
        </S.TextContainer>
        {ANSWER_RENDER_TABLE[type]}
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
