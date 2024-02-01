import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

export default function EditorBox({ children }: PropsWithChildren) {
  return (
    <S.Section>
      <S.RoundedEdgeLeftCover />
      {children}
    </S.Section>
  );
}

const S = {
  Section: styled.section`
    display: flex;
    justify-content: center;
    position: relative;
    padding: 22px 0 24px 0;
    border-radius: 8px;

    background-color: white;
  `,

  RoundedEdgeLeftCover: styled.div`
    position: absolute;
    left: -1px;
    bottom: 0px;
    width: 6px;
    height: 100%;
    border-radius: 8px 0 0 8px;

    background-color: ${({ theme }) => theme.colors.blue};
  `,
};
