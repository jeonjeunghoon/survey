import { ComponentPropsWithoutRef } from 'react';

import styled from '@emotion/styled';

import { useInput } from '../../../hooks/useInput';

import BottomBorder from '../BottomBorder';

type Props = {
  type?: string;
  initialValue?: string;
  fontSize?: string;
  fontWeight?: number;
  fontColor?: string;
  placeholder?: string;
  backgroundColor?: string;
  handleInputChange?: (value: string) => void;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({
  type = 'text',
  initialValue = '',
  fontSize = '1.6rem',
  fontWeight = 400,
  fontColor = 'black',
  backgroundColor = 'inherit',
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
        onChange={(event) => setValue(event.currentTarget.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <BottomBorder startAnimation={isFocus} />
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

  Input: styled.input<{
    fontSize: string;
    fontWeight: number;
    fontColor: string;
    backgroundColor: string;
  }>`
    width: 100%;

    border: none;
    outline: none;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    color: ${({ fontColor }) => fontColor};
    background-color: ${({ backgroundColor }) => backgroundColor};
    letter-spacing: 0;
  `,
};
