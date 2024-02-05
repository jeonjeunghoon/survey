import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { isTitleFocusSelector } from '../../store/form/selectors';

import Card from '../Card';
import { useFocusingCardRef } from '../../hooks/useFocusingCardRef';

export default function TitleCard({ children }: PropsWithChildren) {
  const isTitleFocus = useSelector(isTitleFocusSelector);
  const ref = useFocusingCardRef(null);

  return (
    <Card isFocus={isTitleFocus}>
      <S.RoundedEdgeTopCover />
      <S.FormContainer ref={ref}>{children}</S.FormContainer>
    </Card>
  );
}

const S = {
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 22px 0 24px 0;
  `,

  RoundedEdgeTopCover: styled.div`
    position: absolute;
    left: -1px;
    width: calc(100% + 2px);
    height: 10px;
    border-radius: 8px 8px 0 0;

    background-color: ${({ theme }) => theme.colors.primary};
  `,
};
