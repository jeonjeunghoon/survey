import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

type Props = {
  isFocus?: boolean;
} & PropsWithChildren;

export default function Card({ isFocus = false, children }: Props) {
  return (
    <S.Section>
      {isFocus && <S.RoundedEdgeLeftCover />}
      {children}
    </S.Section>
  );
}

const S = {
  Section: styled.section`
    position: relative;

    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;

    background-color: white;

    box-shadow:
      0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14),
      0 1px 3px 0 rgba(0, 0, 0, 0.12);
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
