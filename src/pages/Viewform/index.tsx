import styled from '@emotion/styled';

import ViewformTitleCard from '../../components/ViewformTitleCard';
import ViewformQuestionCardList from '../../components/ViewformQuestionCardList';
import ViewformSubmit from '../../components/ViewformSubmit';
import DeleteReplyButton from '../../components/DeleteReplyButton';

export default function Viewform() {
  return (
    <S.Container>
      <ViewformTitleCard />
      <ViewformQuestionCardList />
      <S.ControlContainer>
        <ViewformSubmit />
        <DeleteReplyButton />
      </S.ControlContainer>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 640px;
    margin: auto;
    padding: 12px 0 64px 0;
  `,

  ControlContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  `,
};
