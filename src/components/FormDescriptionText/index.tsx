import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { descriptionSelector } from '../../store/form/selectors';

export default function FormDescriptionText() {
  const description = useSelector(descriptionSelector);

  if (!description) return null;

  return (
    <S.Wrapper>
      <S.Text>{description}</S.Text>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    margin: 4px 24px 0 24px;
  `,

  Text: styled.p`
    padding: 4px 0;

    font-size: 1.6rem;
  `,
};
