import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { addOption, addOtherOption } from '../../store/form/formSlice';

import { QuestionType } from '../../types/question';
import { isRenderOtherOptionButton } from '../../constants/option';

import Button from '../common/Button';
import FormOption from '../FormOption';

type Props = {
  id: number;
  type: QuestionType;
  index: number;
  hasOtherOption: boolean;
};

export default function AddOption({ id, type, index, hasOtherOption }: Props) {
  const dispatch = useDispatch();

  return (
    <S.AddOptionContainer>
      <S.AddOptionWrapper>
        <Button onClick={() => dispatch(addOption({ id }))}>
          <FormOption id={id} type={type} text={'옵션 추가'} index={index} fontColor={'#70757A'} />
        </Button>
      </S.AddOptionWrapper>
      {isRenderOtherOptionButton(type, hasOtherOption) && (
        <S.AddOtherOptionContainer>
          <S.AddOtherOptionText fontColor='black'>또는</S.AddOtherOptionText>
          <Button onClick={() => dispatch(addOtherOption({ id }))}>
            <S.AddOtherOptionText fontColor='#1B72E8'>'기타' 추가</S.AddOtherOptionText>
          </Button>
        </S.AddOtherOptionContainer>
      )}
    </S.AddOptionContainer>
  );
}

const S = {
  AddOptionContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
  `,

  AddOptionWrapper: styled.div`
    width: 96px;
  `,

  AddOtherOptionContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 24px;
  `,

  AddOtherOptionText: styled.p<{ fontColor: string }>`
    font-size: 1.6rem;
    color: ${({ fontColor }) => fontColor};
  `,
};
