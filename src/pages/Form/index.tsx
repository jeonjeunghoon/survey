import styled from '@emotion/styled';

import FormPanel from '../../components/FormPanel';
import FormCard from '../../components/FormCard';
import QuestionList from '../../components/QuestionList';
import FormTitle from '../../components/FormTitle';

export default function Form() {
  return (
    <S.Container>
      <FormPanel />
      <FormCard isTitle>
        <FormTitle />
      </FormCard>
      <QuestionList />
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
