import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import {
  addOption,
  addOtherOption,
  deleteOption,
  deleteOtherOption,
} from '../../store/form/formSlice';

import { QuestionType } from '../../types/question';
import { QUESTION_TYPE } from '../../hooks/useQuestionTypeSet';

import Button from '../common/Button';
import XSymbolIcon from '../../assets/svg/x-symbol.svg?react';
import Option from '../Option';

type Props = {
  id: number;
  type: QuestionType;
  optionList: string[] | null;
  hasOtherOption: boolean;
  isEdit?: boolean;
};

export default function OptionList({
  id,
  type,
  optionList,
  hasOtherOption,
  isEdit = false,
}: Props) {
  const dispatch = useDispatch();

  if (!optionList) return null;

  return (
    <>
      <ul>
        {optionList?.map((option, index) => (
          <S.OptionContainer key={`${index}-${option}`}>
            <Option id={id} type={type} text={option} index={index} isEdit={isEdit} />
            {isEdit && optionList.length > 1 && (
              <S.DeleteButton onClick={() => dispatch(deleteOption({ id, index }))}>
                <XSymbolIcon width='16px' height='16px' />
              </S.DeleteButton>
            )}
          </S.OptionContainer>
        ))}
      </ul>
      {hasOtherOption && (
        <S.OptionContainer key={'otherOption'}>
          <Option
            id={id}
            type={type}
            text={'기타...'}
            index={optionList.length}
            fontColor='#70757A'
          />
          {isEdit && (
            <S.DeleteButton onClick={() => dispatch(deleteOtherOption({ id }))}>
              <XSymbolIcon width='16px' height='16px' />
            </S.DeleteButton>
          )}
        </S.OptionContainer>
      )}
      {isEdit && optionList && (
        <S.AddOptionContainer>
          <Button onClick={() => dispatch(addOption({ id }))}>
            <Option
              id={id}
              type={type}
              text={'옵션 추가'}
              index={optionList.length}
              fontColor={'#70757A'}
            />
          </Button>
          {!hasOtherOption &&
            (type === QUESTION_TYPE.객관식질문 || type === QUESTION_TYPE.체크박스) && (
              <>
                <S.AddOtherOptionText fontColor='black'>또는</S.AddOtherOptionText>
                <Button onClick={() => dispatch(addOtherOption({ id }))}>
                  <S.AddOtherOptionText fontColor='#1B72E8'>'기타' 추가</S.AddOtherOptionText>
                </Button>
              </>
            )}
        </S.AddOptionContainer>
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

  DeleteButton: styled.button`
    margin-top: 20px;
  `,

  AddOptionContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  AddOtherOptionText: styled.p<{ fontColor: string }>`
    margin-top: 20px;

    font-size: 1.6rem;
    color: ${({ fontColor }) => fontColor};
  `,
};
