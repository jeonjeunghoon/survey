import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import FormCard from '../FormCard';

export default function QuestionList() {
  const { questionList } = useSelector((state: RootState) => state.form);

  if (!questionList || !questionList.length) return null;

  return (
    <S.List>
      {questionList.map(({ id, type, question, optionList, isRequired }) => {
        return (
          <S.Item key={id}>
            <FormCard>{`${type} ${question} ${optionList} ${isRequired}`}</FormCard>
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
