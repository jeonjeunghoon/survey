import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { changeQuestionOrder } from '../../store/form/formSlice';
import { questionListSelector } from '../../store/form/selectors';

import { useDragAndDrop } from '../../hooks/useDragAndDrop';

import FormQuestionCard from '../FormQuestionCard';

export default function FormQuestionCardList() {
  const questionList = useSelector(questionListSelector);
  const { handleDragStart, handleDragEnter, handleDragOver, dropAndGetNewList } = useDragAndDrop();
  const dispatch = useDispatch();

  return (
    <ul>
      {questionList.map(({ id }, index) => {
        return (
          <S.Item
            key={id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={() =>
              dispatch(changeQuestionOrder({ questionList: dropAndGetNewList(questionList) }))
            }
            onDragOver={handleDragOver}
          >
            <FormQuestionCard id={id} />
          </S.Item>
        );
      })}
    </ul>
  );
}

const S = {
  Item: styled.li`
    margin-top: 12px;
  `,
};
