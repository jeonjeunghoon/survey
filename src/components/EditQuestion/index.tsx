import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';

import TextArea from '../common/TextArea';
import Answer from '../Answer';
import OptionList from '../OptionList';

type Props = {
  type: QuestionType;
  question: string;
  optionList: string[] | null;
  isFocus: boolean;
};

export default function EditQuestion({ type, question, optionList, isFocus }: Props) {
  return (
    <>
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
      {type === 'shortAnswer' || type === 'longAnswer' ? (
        <Answer type={type} />
      ) : (
        <OptionList type={type} optionList={optionList} />
      )}
    </>
  );
}

const S = {
  QuestionWrapper: styled.div`
    width: 446px;

    textarea {
      padding: 8px 0;
    }
  `,
};
