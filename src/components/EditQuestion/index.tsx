import styled from '@emotion/styled';

import { Question } from '../../types/question';

import TextArea from '../common/TextArea';
import Answer from '../Answer';
import OptionList from '../OptionList';
import Dropdown from '../common/Dropdown';

import { useQuestionTypeSet } from '../../hooks/useQuestionTypeSet';

type Props = {
  isFocus: boolean;
} & Omit<Question, 'isRequired'>;

export default function EditQuestion({ id, type, question, optionList, isFocus }: Props) {
  const { questionTypeList, defaultQuestionType } = useQuestionTypeSet(id, type);

  return (
    <>
      <S.HeaderContainer>
        <S.QuestionWrapper>
          <TextArea
            fontSize='1.6rem'
            fontWeight={500}
            initialValue={question}
            backgroundColor='#F2F2F2'
            margin='16px'
            placeholder='질문'
            isFocus={isFocus}
          />
        </S.QuestionWrapper>
        <S.DropdownWrapper>
          <Dropdown dropdownMenuList={questionTypeList} defaultMenu={defaultQuestionType} />
        </S.DropdownWrapper>
      </S.HeaderContainer>
      {type === 'shortAnswer' || type === 'longAnswer' ? (
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
