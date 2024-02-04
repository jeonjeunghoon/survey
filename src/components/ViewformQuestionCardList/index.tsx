import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import ViewformQuestionCard from '../ViewformQuestionCard';

export default function ViewformQuestionCardList() {
  const { questionList } = useSelector((state: RootState) => state.form);

  return (
    <ul>
      {questionList.map(({ id, type }) => {
        return (
          <S.Item key={id}>
            <ViewformQuestionCard id={id} type={type} />
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
