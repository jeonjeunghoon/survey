import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import Input from '../Input';

export default function FormTitle() {
  const { title, description } = useSelector((state: RootState) => state.form);

  return (
    <S.InputContainer>
      <S.Title>
        <Input fontSize='3.6rem' placeholder='설문지 제목' initialValue={title} />
      </S.Title>
      <S.Description>
        <Input placeholder='설문지 설명' initialValue={description} />
      </S.Description>
    </S.InputContainer>
  );
}

const S = {
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 22px 24px 24px 24px;
  `,

  Title: styled.div`
    display: flex;
    flex: 1;
    margin-top: 8px;
    padding-bottom: 8px;

    input {
      padding: 8px 0;
    }
  `,

  Description: styled.div`
    margin-top: 4px;

    input {
      padding: 4px 0;
    }
  `,
};
