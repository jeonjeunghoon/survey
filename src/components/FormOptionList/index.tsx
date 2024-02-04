import { useState } from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeOptionOrder, deleteOption, deleteOtherOption } from '../../store/form/formSlice';

import { useDragAndDrop } from '../../hooks/useDragAndDrop';

import DeleteButton from '../DeleteButton';
import FormOption from '../FormOption';

type Props = {
  id: number;
};

export default function FormOptionList({ id }: Props) {
  const { optionList, type, hasOtherOption } = useSelector(
    (state: RootState) => state.form.questionList!.find((question) => question.id === id)!,
  );
  const [options, setOptions] = useState(optionList);

  const dispatch = useDispatch();
  const hasDeleteButton = optionList.length > 1;
  const { handleDragStart, handleDragEnter, handleDragOver, dropAndGetNewList } = useDragAndDrop();

  if (!optionList) return;

  return (
    <ul>
      {options.map((option, index) => (
        <S.OptionItem
          key={`${index}-${option}-${Math.random()}`}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={() => {
            setOptions(dropAndGetNewList(options));
            dispatch(changeOptionOrder({ id, optionList: options }));
          }}
          onDragOver={handleDragOver}
        >
          <FormOption id={id} type={type} text={option} index={index} />
          {hasDeleteButton && (
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
            disabled
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
