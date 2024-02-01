import styled from '@emotion/styled';
import { QuestionType } from '../../types/question';

type Props = {
  type: QuestionType;
  optionList: string[] | null;
};

export default function OptionList({ type, optionList }: Props) {
  if (!optionList) return null;

  return (
    <S.OptionList>
      {optionList?.map((option) => <S.Option key={option}>{option}</S.Option>)}
    </S.OptionList>
  );
}

const S = {
  OptionList: styled.ul``,

  Option: styled.li``,
};
