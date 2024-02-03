import styled from '@emotion/styled';

import FormPanel from '../../components/FormPanel';
import FormTitleCard from '../../components/FormTitleCard';
import FormTitleTextarea from '../../components/FormTitleTextarea';
import FormDescriptionTextarea from '../../components/FormDescriptionTextarea';
import FormQuestionCardList from '../../components/FormQuestionCardList';

export default function Form() {
  return (
    <S.Container>
      <FormPanel />
      <FormTitleCard>
        <FormTitleTextarea />
        <FormDescriptionTextarea />
      </FormTitleCard>
      <FormQuestionCardList />
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
