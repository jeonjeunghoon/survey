import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function FormTitleText() {
  const { title } = useSelector((state: RootState) => state.form);

  return (
    <S.Wrapper>
      <S.Text>{title}</S.Text>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex: 1;
    margin: 8px 24px 0 24px;
    padding-bottom: 8px;
  `,

  Text: styled.h1`
    padding: 8px 0;

    font-size: 3.6rem;
    font-weight: 400;
  `,
};
