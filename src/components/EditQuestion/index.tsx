import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { Question } from '../../types/question';

import { QUESTION_TYPE, useQuestionTypeSet } from '../../hooks/useQuestionTypeSet';

import TextArea from '../common/TextArea';
import Answer from '../Answer';
import OptionList from '../OptionList';
import Dropdown from '../common/Dropdown';
import { editQuestion } from '../../store/form/formSlice';

type Props = {
  isFocus: boolean;
} & Omit<Question, 'isRequired'>;

export default function EditQuestion({ id, type, question, optionList, isFocus }: Props) {
  const { questionTypeList, defaultQuestionType } = useQuestionTypeSet(id, type);
  const dispatch = useDispatch();
  const changeQuestion = (value?: string) => {
    if (value === undefined) return;

    dispatch(editQuestion({ id, question: value }));
  };

  return (
    <>
      <S.HeaderContainer>
        <S.QuestionWrapper>
          <TextArea
            fontSize='2rem'
            initialValue={question}
            backgroundColor='#F2F2F2'
            margin='16px'
            placeholder='질문'
            isFocus={isFocus}
            handleTextareaChange={changeQuestion}
          />
        </S.QuestionWrapper>
        <S.DropdownWrapper>
          <Dropdown dropdownMenuList={questionTypeList} defaultMenu={defaultQuestionType} />
        </S.DropdownWrapper>
      </S.HeaderContainer>
      {type === QUESTION_TYPE.단답형 || type === QUESTION_TYPE.장문형 ? (
        <Answer type={type} />
      ) : (
        <OptionList type={type} optionList={optionList} />
      )}
    </>
  );
}

const S = {
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
};
