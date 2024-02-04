import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeQuestionOrder } from '../../store/form/formSlice';

import { useDragAndDrop } from '../../hooks/useDragAndDrop';

import FormQuestionCard from '../FormQuestionCard';

export default function FormQuestionCardList() {
  const { questionList } = useSelector((state: RootState) => state.form);
  const { handleDragStart, handleDragEnter, handleDragOver, dropAndGetNewList } = useDragAndDrop();
  const dispatch = useDispatch();

  if (!questionList || !questionList.length) return null;

  return (
    <ul>
      {questionList.map(({ id, type, question, optionList, hasOtherOption }, index) => {
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
            <FormQuestionCard
              id={id}
              type={type}
              question={question}
              optionList={optionList}
              hasOtherOption={hasOtherOption}
            />
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
