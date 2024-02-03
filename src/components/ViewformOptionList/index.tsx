import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';
import Input from '../common/Input';

type Props = {
  type: QuestionType;
  optionList: string[] | null;
  hasOtherOption: boolean;
};

export default function ViewformOptionList({ type, optionList, hasOtherOption }: Props) {
  return (
    <>
      <ul>
        {optionList?.map((option, index) => (
          <S.OptionContainer key={`${index}-${option}`}>
            {/* <Option id={id} type={type} text={option} index={index} isEdit={isEdit} /> */}
          </S.OptionContainer>
        ))}
      </ul>
      {hasOtherOption && (
        <S.OptionContainer key={'otherOption'}>
          <Input />
        </S.OptionContainer>
      )}
    </>
  );
}

const S = {
  OptionContainer: styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    li {
      flex: 1;
    }
  `,
};
