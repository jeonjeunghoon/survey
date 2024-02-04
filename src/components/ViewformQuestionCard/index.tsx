import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import {
  selectQuestionById,
  selectQuestionIsRequiredById,
  selectQuestionTypeById,
} from '../../store/form/selectors';

import { QUESTION_TYPE } from '../../constants/question';

import Card from '../Card';
import ViewformAnswer from '../ViewformAnswer';
import ViewformDropdown from '../ViewformDropdown';
import ViewformCheckbox from '../ViewformCheckbox';
import ViewformRadio from '../ViewformRadio';

type Props = {
  id: number;
  disabled?: boolean;
};

export default function ViewformQuestionCard({ id, disabled = false }: Props) {
  const type = useSelector(selectQuestionTypeById(id));
  const question = useSelector(selectQuestionById(id));
  const isRequired = useSelector(selectQuestionIsRequiredById(id));

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
