import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';
import { deleteOption, deleteOtherOption } from '../../store/form/formSlice';

import { QuestionType } from '../../types/question';

import DeleteButton from '../DeleteButton';
import FormOption from '../FormOption';

type Props = {
  id: number;
  type: QuestionType;
  optionList: string[] | null;
  hasOtherOption: boolean;
};

export default function FormOptionList({ id, type, optionList, hasOtherOption }: Props) {
  const dispatch = useDispatch();

  if (!optionList) return null;

  return (
    <ul>
      {optionList.map((option, index) => (
        <S.OptionItem key={`${index}-${option}`}>
          <FormOption id={id} type={type} text={option} index={index} />
          {optionList.length > 1 && (
            <DeleteButton handleButtonClick={() => dispatch(deleteOption({ id, index }))} />
          )}
        </S.OptionItem>
      ))}
      {hasOtherOption && (
        <S.OptionItem key={'otherOption'}>
          <FormOption
            id={id}
            type={type}
            text={'기타...'}
            index={optionList.length}
            fontColor='#70757A'
          />
          <DeleteButton handleButtonClick={() => dispatch(deleteOtherOption({ id }))} />
        </S.OptionItem>
      )}
    </ul>
  );
}

const S = {
  OptionItem: styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 20px;
  `,

  AddOptItem: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
};
