import styled from '@emotion/styled';

import FormCard from '../FormCard';
import FormTitleTextarea from '../FormTitleTextarea';
import FormDescriptionTextarea from '../FormDescriptionTextarea';

export default function FormTitleCard() {
  return (
    <FormCard>
      <S.RoundedEdgeTopCover />
      <S.FormContainer>
        <FormTitleTextarea />
        <FormDescriptionTextarea />
      </S.FormContainer>
    </FormCard>
  );
}

const S = {
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 22px 24px 24px 24px;
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
