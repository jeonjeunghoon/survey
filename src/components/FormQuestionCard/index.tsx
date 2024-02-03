import styled from '@emotion/styled';

import { Question } from '../../types/question';
import { useCheckFocusingDiv } from '../../hooks/useCheckFocusingDiv';

import FormCard from '../FormCard';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function FormQuestionCard({
  id,
  type,
  question,
  optionList,
  hasOtherOption,
}: Omit<Question, 'isRequired'>) {
  const { ref, isFocus } = useCheckFocusingDiv(false);

  return (
    <FormCard>
      <S.FormQuestionCardContainer ref={ref}>
        <S.DragWrapper />
        <S.Container>
          <Header id={id} type={type} question={question} isFocus={isFocus} />
          <Body id={id} type={type} optionList={optionList} hasOtherOption={hasOtherOption} />
          <S.BottomBorder />
          <Footer id={id} />
        </S.Container>
      </S.FormQuestionCardContainer>
    </FormCard>
  );
}

const S = {
  FormQuestionCardContainer: styled.div`
    width: 100%;
    padding: 0 24px 24px 24px;
  `,

  DragWrapper: styled.div`
    width: 100%;
    height: 24px;
  `,

  Container: styled.div`
    position: relative;
  `,

  BottomBorder: styled.div`
    width: 100%;
    height: 1px;
    margin-top: 48px;

    background-color: #e0e0e0;
  `,
};
