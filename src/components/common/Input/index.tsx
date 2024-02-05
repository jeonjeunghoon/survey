import { ComponentPropsWithoutRef } from 'react';

import styled from '@emotion/styled';

import { useInput } from '../../../hooks/useInput';

import BottomBorderAnimation from '../BottomBorderAnimation';

type Props = {
  type?: string;
  initialValue?: string;
  fontSize?: string;
  fontWeight?: number;
  fontColor?: string;
  placeholder?: string;
  backgroundColor?: string;
  hasHover?: boolean;
  handleInputChange?: (value: string) => void;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({
  type = 'text',
  initialValue = '',
  fontSize = '1.6rem',
  fontWeight = 400,
  fontColor = 'black',
  backgroundColor = 'inherit',
  hasHover = true,
  placeholder,
  handleInputChange,
  ...rest
}: Props) {
  const { value, isFocus, setValue, handleFocus, handleBlur } = useInput(
    initialValue,
    handleInputChange,
  );

  return (
    <S.Container>
      <S.Input
        type={type}
        value={value}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontColor={fontColor}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
        hasHover={hasHover}
        onChange={(event) => setValue(event.currentTarget.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      {isFocus && <BottomBorderAnimation startAnimation={isFocus} />}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
    position: relative;
    min-height: 1.5rem;
  `,

  Input: styled.input<{
    fontSize: string;
    fontWeight: number;
    fontColor: string;
    backgroundColor: string;
    hasHover: boolean;
  }>`
    width: 100%;
    padding: 8px 0;

    border: none;
    outline: none;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ fontColor }) => fontColor};
    background-color: ${({ backgroundColor }) => backgroundColor};
    letter-spacing: 0;

    &:hover {
      border-bottom: ${({ hasHover }) => hasHover && '1px dotted #e0e0e0'};
    }
  `,
};
