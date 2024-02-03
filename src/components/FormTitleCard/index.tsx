import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import FormCard from '../FormCard';

export default function FormTitleCard({ children }: PropsWithChildren) {
  return (
    <FormCard>
      <S.RoundedEdgeTopCover />
      <S.FormContainer>{children}</S.FormContainer>
    </FormCard>
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
