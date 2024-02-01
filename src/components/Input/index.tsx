import styled from '@emotion/styled';

import { useInitializeTitle } from '../../hooks/useInitializeTitle';
import { useInput } from '../../hooks/useInput';

type Props = {
  type?: string;
  fontSize?: string;
  isRequired?: boolean;
  hasTextEditor?: boolean;
  placeholder?: string;
};

export default function Input({
  type = 'text',
  fontSize = '1.4rem',
  isRequired = false,
  placeholder,
  ...rest
}: Props) {
  const { value, setValue, isFocus, handleFocus, handleBlur } = useInput();
  const isTitle = placeholder === '설문지 제목';
  useInitializeTitle({
    isEmpty: value === '',
    isTitle,
    setValue,
  });

  return (
    <S.Container isTitle={isTitle}>
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
      <S.BottomBorder isTitle={isTitle} />
      <S.BottomBorderAnimation isTitle={isTitle} isFocus={isFocus} />
    </S.Container>
  );
}

const S = {
  Container: styled.div<{ isTitle: boolean }>`
    position: relative;
    margin-top: 8px;
    padding-bottom: ${({ isTitle }) => (isTitle ? '8px' : '4px')};
  `,

  Input: styled.input<{ fontSize: string }>`
    width: 100%;

    font-size: ${({ fontSize }) => fontSize};
    border: none;
    outline: none;
  `,

  BottomBorder: styled.div<{ isTitle: boolean }>`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    margin-top: ${({ isTitle }) => (isTitle ? '8px' : '4px')};

    background-color: #e0e0e0;
  `,

  BottomBorderAnimation: styled.div<{ isTitle: boolean; isFocus: boolean }>`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${({ isFocus }) => isFocus && '2px'};
    margin-top: ${({ isTitle }) => (isTitle ? '8px' : '4px')};

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
