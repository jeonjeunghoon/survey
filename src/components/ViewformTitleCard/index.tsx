import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { hasRequiredSelector } from '../../store/form/selectors';

import TitleCard from '../TitleCard';
import FormTitleText from '../../components/FormTitleText';
import FormDescriptionText from '../../components/FormDescriptionText';

export default function ViewformTitleCard() {
  const hasRequired = useSelector(hasRequiredSelector);

  return (
    <TitleCard>
      <FormTitleText />
      <FormDescriptionText />
      {hasRequired && (
        <>
          <S.BottomBorder />
          <S.FooterWrapper>
            <S.RequiredText>* 표시는 필수 질문임</S.RequiredText>
          </S.FooterWrapper>
        </>
      )}
    </TitleCard>
  );
}

const S = {
  BottomBorder: styled.div`
    width: 100%;
    height: 1px;
    margin-top: 24px;

    background-color: #e0e0e0;
  `,

  FooterWrapper: styled.div`
    padding: 22px 24px 0 24px;
  `,

  RequiredText: styled.p`
    font-size: 1.6rem;
    color: red;
  `,
};
