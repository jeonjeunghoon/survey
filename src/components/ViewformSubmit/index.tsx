import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export default function ViewformSubmit() {
  return (
    <S.Link to='/reply' target='_blank'>
      제출
    </S.Link>
  );
}

const S = {
  Link: styled(Link)`
    font-size: 1.6rem;
    margin: auto 0;
    padding: 12px 30px;

    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 4px;

    &:link,
    :visited,
    :hover {
      color: white;
      text-decoration: none;
    }
  `,
};
