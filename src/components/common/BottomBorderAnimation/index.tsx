import styled from '@emotion/styled';

type Props = {
  startAnimation: boolean;
};

export default function BottomBorderAnimation({ startAnimation }: Props) {
  return <S.BottomBorderAnimation startAnimation={startAnimation} />;
}

const S = {
  BottomBorder: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;

    background-color: #e0e0e0;
  `,

  BottomBorderAnimation: styled.div<{ startAnimation: boolean }>`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${({ startAnimation }) => startAnimation && '2px'};

    background-color: ${({ theme }) => theme.colors.primary};

    transform: scaleX(${({ startAnimation }) => (startAnimation ? '1' : '0')});
    animation: ${({ startAnimation }) => (startAnimation ? 'AddUnderline' : 'RemoveUnderline')} 0.3s
      cubic-bezier(0.4, 0, 0.2, 1);

    @keyframes RemoveUnderline {
      0% {
        opacity: 1;
        transform: scaleX(1);
      }
      100% {
        opacity: 0;
        transform: scaleX(1);
      }
    }

    @keyframes AddUnderline {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }
  `,
};
