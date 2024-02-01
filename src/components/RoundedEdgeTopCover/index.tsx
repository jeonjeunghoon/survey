import styled from '@emotion/styled';

export default function RoundedEdgeTopCover() {
  return <S.RoundedEdgeTopCover />;
}

const S = {
  RoundedEdgeTopCover: styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: 10px;
    border-radius: 8px 8px 0 0;

    background-color: ${({ theme }) => theme.colors.primary};
  `,
};
