import styled from '@emotion/styled';

import { QuestionType } from '../../types/question';

type Props = {
  id: number;
  type: QuestionType;
  optionList: string[];
  hasOtherOption: boolean;
};

export default function ViewformOptionList({ id, type, optionList, hasOtherOption }: Props) {
  return (
    <>
      <ul>
        {optionList.map((option, index) => (
          <S.OptionContainer key={`${index}-${option}`}>
            {/* <FormOption id={id} type={type} text={option} index={index} /> */}
          </S.OptionContainer>
        ))}
      </ul>
      {hasOtherOption && (
        <S.OptionContainer key={'otherOption'}>
          {/* <FormOption id={id} type={type} text='기타' index={optionList.length} /> */}
          {/* <Input /> */}
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
