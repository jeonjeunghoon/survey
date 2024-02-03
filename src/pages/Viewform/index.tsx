import styled from '@emotion/styled';

import ViewformTitleCard from '../../components/ViewformTitleCard';

export default function Viewform() {
  return (
    <S.Container>
      <ViewformTitleCard />
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
