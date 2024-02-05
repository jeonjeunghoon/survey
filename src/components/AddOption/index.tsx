import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { addOption, addOtherOption } from '../../store/form/formSlice';
import {
  isFocusSelectorById,
  selectQuestionHasOtherOptionById,
  selectQuestionOptionListById,
  selectQuestionTypeById,
} from '../../store/form/selectors';

import { isRenderOtherOptionButton } from '../../constants/option';

import Button from '../common/Button';
import Icon from '../Icon';

type Props = {
  id: number;
};

export default function AddOption({ id }: Props) {
  const type = useSelector(selectQuestionTypeById(id));
  const optionList = useSelector(selectQuestionOptionListById(id));
  const hasOtherOption = useSelector(selectQuestionHasOtherOptionById(id));
  const isFocus = useSelector(isFocusSelectorById(id));

  const dispatch = useDispatch();

  if (!isFocus) return null;

  return (
    <S.AddOptionContainer>
      <S.AddOptionWrapper>
        <Button onClick={() => dispatch(addOption({ id }))}>
          <S.AddOption>
            <Icon id={id} index={optionList.length} />
            옵션 추가
          </S.AddOption>
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

  AddOption: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;

    font-size: 1.6rem;
    color: #70757a;
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
