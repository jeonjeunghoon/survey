import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { changeOptionOrder, deleteOption, deleteOtherOption } from '../../store/form/formSlice';
import {
  selectQuestionHasOtherOptionById,
  selectQuestionOptionListById,
} from '../../store/form/selectors';

import { useDragAndDrop } from '../../hooks/useDragAndDrop';

import DeleteButton from '../DeleteButton';
import FormOption from '../FormOption';

type Props = {
  id: number;
};

export default function FormOptionList({ id }: Props) {
  const optionList = useSelector(selectQuestionOptionListById(id));
  const hasOtherOption = useSelector(selectQuestionHasOtherOptionById(id));
  const dispatch = useDispatch();

  const hasDeleteButton = optionList.length > 1;
  const { handleDragStart, handleDragEnter, handleDragOver, dropAndGetNewList } = useDragAndDrop();

  return (
    <ul>
      {optionList.map((option, index) => (
        <S.OptionItem
          key={`${index}-${option}-${Math.random()}`}
          draggable
          onDragStart={handleDragStart<HTMLLIElement>(index)}
          onDragEnter={handleDragEnter<HTMLLIElement>(index)}
          onDragEnd={dropAndGetNewList(optionList, (newOptionList) =>
            dispatch(changeOptionOrder({ id, optionList: newOptionList })),
          )}
          onDragOver={handleDragOver}
        >
          <FormOption id={id} option={option} index={index} />
          {hasDeleteButton && (
            <DeleteButton handleButtonClick={() => dispatch(deleteOption({ id, index }))} />
          )}
        </S.OptionItem>
      ))}
      {hasOtherOption && (
        <S.OptionItem key={'otherOption'}>
          <FormOption
            id={id}
            option={'기타...'}
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
