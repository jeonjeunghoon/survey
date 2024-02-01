import styled from '@emotion/styled';

import Input from '../Input';
import EditorBox from '../EditorBox';
import RoundedEdgeTopCover from '../RoundedEdgeTopCover';

export default function EditorTitleBox() {
  return (
    <EditorBox>
      <RoundedEdgeTopCover />
      <S.InputContainer>
        <Input fontSize='3.2rem' placeholder='설문지 제목' />
        <Input placeholder='설문지 설명' />
      </S.InputContainer>
    </EditorBox>
  );
}

const S = {
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 24px;
  `,
};
