import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionTypeById } from '../../store/form/selectors';
import { deleteQuestion, pasteQuestion, toggleRequired } from '../../store/form/formSlice';

import { isRenderAnswer } from '../../constants/option';
import { useCheckFocusingDiv } from '../../hooks/useCheckFocusingDiv';

import Button from '../common/Button';
import PasteIcon from '../../assets/svg/copy-document.svg?react';
import TrashcanIcon from '../../assets/svg/trash.svg?react';
import Card from '../Card';
import FormQuestion from '../FormQuestion';
import QuestionTypeSelector from '../QuestionTypeSelector';
import FormAnswer from '../FormAnswer';
import FormOptionList from '../FormOptionList';
import AddOption from '../AddOption';

type Props = {
  id: number;
};

export default function FormQuestionCard({ id }: Props) {
  const type = useSelector(selectQuestionTypeById(id));
  const { ref, isFocus } = useCheckFocusingDiv(false);
  const dispatch = useDispatch();

  return (
    <Card>
      <S.FormQuestionCardContainer ref={ref}>
        <S.DragWrapper />
        <S.Container>
          <S.HeaderContainer>
            <FormQuestion id={id} isFocus={isFocus} />
            <QuestionTypeSelector id={id} />
          </S.HeaderContainer>
          <>
            {isRenderAnswer(type) ? (
              <FormAnswer id={id} />
            ) : (
              <>
                <FormOptionList id={id} />
                <AddOption id={id} />
              </>
            )}
          </>
          <S.BottomBorder />
          <S.FooterContainer>
            <Button onClick={() => dispatch(pasteQuestion({ id }))}>
              <PasteIcon width='24px' height='24px' />
            </Button>
            <Button onClick={() => dispatch(deleteQuestion({ id }))}>
              <TrashcanIcon width='24px' height='24px' />
            </Button>
            <Button onClick={() => dispatch(toggleRequired({ id }))}>필수</Button>
          </S.FooterContainer>
        </S.Container>
      </S.FormQuestionCardContainer>
    </Card>
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

  HeaderContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  BottomBorder: styled.div`
    width: 100%;
    height: 1px;
    margin-top: 48px;

    background-color: #e0e0e0;
  `,

  FooterContainer: styled.div`
    display: flex;
    gap: 20px;
    justify-content: end;
    align-items: center;
    margin-top: 32px;
  `,
};
