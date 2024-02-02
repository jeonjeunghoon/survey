import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { deleteOption } from '../../store/form/formSlice';

import { QuestionType } from '../../types/question';

import Option from '../Option';
import XSymbolIcon from '../../assets/svg/x-symbol.svg?react';

type Props = {
  id: number;
  type: QuestionType;
  optionList: string[] | null;
  isEdit?: boolean;
};

export default function OptionList({ id, type, optionList, isEdit = false }: Props) {
  const dispatch = useDispatch();

  return (
    <ul>
      {optionList?.map((option, index) => (
        <S.OptionContainer>
          <Option
            key={`${index}-${option}`}
            id={id}
            type={type}
            text={option}
            index={index}
            isEdit={isEdit}
          />
          {isEdit && optionList.length > 1 && (
            <S.DeleteButton onClick={() => dispatch(deleteOption({ id, index }))}>
              <XSymbolIcon width='16px' height='16px' />
            </S.DeleteButton>
          )}
        </S.OptionContainer>
      ))}
    </ul>
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
};
