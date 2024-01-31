import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

export default function Layout({ children }: PropsWithChildren) {
  return <S.Layout>{children}</S.Layout>;
}

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.background};
  `,
};
