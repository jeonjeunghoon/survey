import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import {
  deleteQuestion,
  editQuestion,
  pasteQuestion,
  toggleRequired,
} from '../../store/form/formSlice';

import { Question } from '../../types/question';
import { QUESTION_TYPE, useQuestionTypeSet } from '../../hooks/useQuestionTypeSet';

import Textarea from '../common/Textarea';
import Dropdown from '../common/Dropdown';
import Button from '../common/Button';
import PasteIcon from '../../assets/svg/copy-document.svg?react';
import TrashcanIcon from '../../assets/svg/trash.svg?react';
import OptionList from '../OptionList';
import Answer from '../Answer';

type Props = {
  isFocus: boolean;
} & Omit<Question, 'isRequired'>;

export default function EditQuestion({
  id,
  type,
  question,
  optionList,
  hasOtherOption,
  isFocus,
}: Props) {
  const { questionTypeList, defaultQuestionType } = useQuestionTypeSet(id, type);
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.QuestionWrapper>
          <Textarea
            fontSize='2rem'
            initialValue={question}
            backgroundColor='#F2F2F2'
            margin='16px'
            placeholder='질문'
            isFocus={isFocus}
            handleTextareaChange={(value?: string) =>
              dispatch(editQuestion({ id, question: value }))
            }
          />
        </S.QuestionWrapper>
        <S.DropdownWrapper>
          <Dropdown dropdownMenuList={questionTypeList} defaultMenu={defaultQuestionType} />
        </S.DropdownWrapper>
      </S.HeaderContainer>
      {type === QUESTION_TYPE.단답형 || type === QUESTION_TYPE.장문형 ? (
        <Answer type={type} />
      ) : (
        <OptionList
          id={id}
          type={type}
          optionList={optionList}
          hasOtherOption={hasOtherOption}
          isEdit
        />
      )}
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
  );
}

const S = {
  Container: styled.div`
    position: relative;
  `,

  HeaderContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  QuestionWrapper: styled.div`
    min-width: 446px;

    textarea {
      padding: 8px 0;
    }
  `,

  DropdownWrapper: styled.div`
    width: 208px;
  `,

  BottomBorder: styled.div`
    width: 100%;
    height: 1px;
    margin-top: 24px;

    background-color: #e0e0e0;
  `,

  FooterContainer: styled.div`
    display: flex;
    gap: 20px;
    justify-content: end;
    align-items: center;
    margin-top: 20px;
  `,
};
