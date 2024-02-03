import styled from '@emotion/styled';

import ViewformTitleCard from '../../components/ViewformTitleCard';
import ViewformQuestionCardList from '../../components/ViewformQuestionCardList';

export default function Viewform() {
  return (
    <S.Container>
      <ViewformTitleCard />
      <ViewformQuestionCardList />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 640px;
    margin: auto;
    padding: 12px 0 64px 0;
  `,
};
