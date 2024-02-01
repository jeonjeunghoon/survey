import { ComponentPropsWithoutRef } from 'react';

import styled from '@emotion/styled';

import { useInput } from '../../../hooks/useInput';

import BottomBorder from '../BottomBorder';

type Props = {
  type?: string;
  fontSize?: string;
  fontWeight?: number;
  initialValue?: string;
  backgroundColor?: string;
  placeholder?: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({
  type = 'text',
  fontSize = '1.6rem',
  fontWeight = 400,
  initialValue = '',
  backgroundColor = 'inherit',
  placeholder,
  ...rest
}: Props) {
  const { value, isFocus, setValue, handleFocus, handleBlur } = useInput(initialValue);

  return (
    <S.Container>
      <S.Input
        type={type}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        fontSize={fontSize}
        fontWeight={fontWeight}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
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
    backgroundColor: string;
  }>`
    width: 100%;

    border: none;
    outline: none;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    background-color: ${({ backgroundColor }) => backgroundColor};
    letter-spacing: 0;
  `,
};
