import styled from '@emotion/styled';

import { Question } from '../../types/question';

import { useCheckFocusingDiv } from '../../hooks/useCheckFocusingDiv';

import FormCard from '../FormCard';
import EditQuestion from '../EditQuestion';
import ViewQuestion from '../ViewQuestion';

export default function QuestionCard({
  type,
  question,
  optionList,
  isRequired,
}: Omit<Question, 'id'>) {
  const { ref, isFocus } = useCheckFocusingDiv(false);

  return (
    <FormCard>
      <S.Container ref={ref}>
        <S.DragWrapper />
        {isFocus ? (
          <EditQuestion type={type} question={question} optionList={optionList} isFocus={isFocus} />
        ) : (
          <ViewQuestion type={type} question={question} optionList={optionList} />
        )}
      </S.Container>
    </FormCard>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    padding: 0 24px 24px 24px;
  `,

  DragWrapper: styled.div`
    width: 100%;
    height: 24px;
  `,
};
