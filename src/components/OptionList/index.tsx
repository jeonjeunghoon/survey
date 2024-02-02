import styled from '@emotion/styled';
import { QuestionType } from '../../types/question';
import Option from '../Option';

type Props = {
  type: QuestionType;
  optionList: string[] | null;
};

export default function OptionList({ type, optionList }: Props) {
  return (
    <S.OptionList>
      {optionList?.map((option, index) => (
        <Option key={option} type={type} text={option} index={index} />
      ))}
    </S.OptionList>
  );
}

const S = {
  OptionList: styled.ul``,
};
