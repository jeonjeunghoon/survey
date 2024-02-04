import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { addOption, addOtherOption } from '../../store/form/formSlice';

import { isRenderOtherOptionButton } from '../../constants/option';

import Button from '../common/Button';
import CircleIcon from '../../assets/svg/circle.svg?react';
import SquareIcon from '../../assets/svg/square.svg?react';
import { QUESTION_TYPE } from '../../constants/question';
import { RootState } from '../../store';

type Props = {
  id: number;
};

export default function AddOption({ id }: Props) {
  const { type, hasOtherOption, optionList } = useSelector(
    (state: RootState) => state.form.questionList!.find((question) => question.id === id)!,
  );
  const dispatch = useDispatch();
  const OPTION_ICON_TABLE = {
    [QUESTION_TYPE.객관식질문]: <CircleIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.체크박스]: <SquareIcon stroke='#BDBDBD' fill='white' />,
    [QUESTION_TYPE.드롭다운]: <S.DropdownIndex>{optionList.length}</S.DropdownIndex>,
  };

  return (
    <S.AddOptionContainer>
      <S.AddOptionWrapper>
        <Button onClick={() => dispatch(addOption({ id }))}>
          <S.AddOption>{OPTION_ICON_TABLE[type]}옵션 추가</S.AddOption>
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

  DropdownIndex: styled.p`
    font-size: 1.6rem;
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
