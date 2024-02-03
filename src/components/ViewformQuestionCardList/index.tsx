import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import ViewformQuestionCard from '../ViewformQuestionCard';

export default function ViewformQuestionCardList() {
  const { questionList } = useSelector((state: RootState) => state.form);

  if (!questionList || !questionList.length) return null;

  return (
    <ul>
      {questionList.map(({ id, type, question, optionList, hasOtherOption, isRequired }) => {
        return (
          <S.Item key={id}>
            <ViewformQuestionCard
              id={id}
              type={type}
              question={question}
              optionList={optionList}
              hasOtherOption={hasOtherOption}
              isRequired={isRequired}
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
