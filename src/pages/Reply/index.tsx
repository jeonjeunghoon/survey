import styled from '@emotion/styled';

import ViewformTitleCard from '../../components/ViewformTitleCard';
import ReplyList from '../../components/ReplyList';

export default function Reply() {
  return (
    <S.Container>
      <ViewformTitleCard />
      <ReplyList />
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
