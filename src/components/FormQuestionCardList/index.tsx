import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import FormQuestionCard from '../FormQuestionCard';

export default function FormQuestionCardList() {
  const { questionList } = useSelector((state: RootState) => state.form);

  if (!questionList || !questionList.length) return null;

  return (
    <ul>
      {questionList.map(({ id, type, question, optionList, hasOtherOption }) => {
        return (
          <S.Item key={id}>
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
