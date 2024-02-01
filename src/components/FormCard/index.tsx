import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import { useFormCardFocus } from '../../hooks/useFormCardFocus';

type Props = {
  isTitle?: boolean;
} & PropsWithChildren;

export default function FormCard({ isTitle = false, children }: Props) {
  const { ref, isFocus } = useFormCardFocus(isTitle);

  return (
    <S.Section ref={ref}>
      {isFocus && <S.RoundedEdgeLeftCover />}
      {isTitle && <S.RoundedEdgeTopCover />}
      {children}
    </S.Section>
  );
}

const S = {
  Section: styled.section`
    display: flex;
    justify-content: center;
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

  RoundedEdgeTopCover: styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: 10px;
    border-radius: 8px 8px 0 0;

    background-color: ${({ theme }) => theme.colors.primary};
  `,
};
