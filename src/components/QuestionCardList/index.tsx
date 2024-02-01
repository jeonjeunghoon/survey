import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import QuestionCard from '../QuestionCard';

export default function QuestionCardList() {
  const { questionList } = useSelector((state: RootState) => state.form);

  if (!questionList || !questionList.length) return null;

  return (
    <S.List>
      {questionList.map(({ id, type, question, optionList, isRequired }) => {
        return (
          <S.Item key={id}>
            <QuestionCard
              id={id}
              type={type}
              question={question}
              optionList={optionList}
              isRequired={isRequired}
            />
          </S.Item>
        );
      })}
    </S.List>
  );
}

const S = {
  List: styled.ul``,

  Item: styled.li`
    margin-top: 12px;
  `,
};
