import styled from '@emotion/styled';

import { useInput } from '../../hooks/useInput';

type Props = {
  type?: string;
  fontSize?: string;
  isRequired?: boolean;
  hasTextEditor?: boolean;
  initialValue?: string;
  placeholder?: string;
};

export default function Input({
  type = 'text',
  fontSize = '1.6rem',
  isRequired = false,
  initialValue = '',
  placeholder,
  ...rest
}: Props) {
  const { value, setValue, isFocus, handleFocus, handleBlur } = useInput(initialValue);

  return (
    <S.Container>
      <S.Input
        type={type}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        fontSize={fontSize}
        placeholder={placeholder}
        required={isRequired}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <S.BottomBorder />
      <S.BottomBorderAnimation isFocus={isFocus} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    position: relative;
    min-height: 1.5rem;
    margin-top: 8px;
  `,

  Input: styled.input<{ fontSize: string }>`
    width: 100%;

    border: none;
    outline: none;
    font-size: ${({ fontSize }) => fontSize};
    letter-spacing: 0;
  `,

  BottomBorder: styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;

    background-color: #e0e0e0;
  `,

  BottomBorderAnimation: styled.div<{ isFocus: boolean }>`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${({ isFocus }) => isFocus && '2px'};

    background-color: ${({ theme }) => theme.colors.primary};

    transform: scaleX(${({ isFocus }) => (isFocus ? '1' : '0')});
    animation: ${({ isFocus }) => (isFocus ? 'AddUnderline' : 'RemoveUnderline')} 0.3s
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
