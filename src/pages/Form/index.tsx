import styled from '@emotion/styled';

import FormPanel from '../../components/FormPanel';
import QuestionCardList from '../../components/QuestionCardList';
import FormTitleCard from '../../components/FormTitleCard';
import FormTitleTextarea from '../../components/FormTitleTextarea';
import FormDescriptionTextarea from '../../components/FormDescriptionTextarea';

export default function Form() {
  return (
    <S.Container>
      <FormPanel />
      <FormTitleCard>
        <FormTitleTextarea />
        <FormDescriptionTextarea />
      </FormTitleCard>
      <QuestionCardList />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 770px;
    margin: auto;
    padding: 12px 0 64px 0;
  `,
};
