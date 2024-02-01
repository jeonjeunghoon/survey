import { ComponentPropsWithoutRef } from 'react';

import styled from '@emotion/styled';

import { useInput } from '../../hooks/useInput';

import BottomBorder from '../BottomBorder';

type Props = {
  type?: string;
  fontSize?: string;
  initialValue?: string;
  placeholder?: string;
} & ComponentPropsWithoutRef<'input'>;

export default function Input({
  type = 'text',
  fontSize = '1.6rem',
  initialValue = '',
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
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <BottomBorder onAnimation={isFocus} />
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
};
