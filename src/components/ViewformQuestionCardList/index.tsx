import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { questionListSelector } from '../../store/form/selectors';

import ViewformQuestionCard from '../ViewformQuestionCard';

export default function ViewformQuestionCardList() {
  const questionList = useSelector(questionListSelector);

  return (
    <ul>
      {questionList.map(({ id }) => {
        return (
          <S.Item key={id}>
            <ViewformQuestionCard id={id} />
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
