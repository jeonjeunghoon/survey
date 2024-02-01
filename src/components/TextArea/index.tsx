import { ComponentPropsWithoutRef, useRef } from 'react';

import styled from '@emotion/styled';

import BottomBorder from '../BottomBorder';

import { useResizeTextAreaHeight } from '../../hooks/useResizeTextAreaHeight';
import { useInput } from '../../hooks/useInput';

type Props = {
  fontSize?: string;
  initialValue?: string;
  rows?: number;
  placeholder?: string;
} & ComponentPropsWithoutRef<'textarea'>;

export default function TextArea({
  fontSize = '1.6rem',
  initialValue = '',
  rows = 1,
  placeholder,
  ...rest
}: Props) {
  const { value, isFocus, setValue, handleFocus, handleBlur } = useInput(initialValue);
  const ref = useRef<HTMLTextAreaElement>(null);
  useResizeTextAreaHeight(ref, value);

  return (
    <S.Container>
      <S.TextArea
        value={value}
        fontSize={fontSize}
        rows={rows}
        placeholder={placeholder}
        ref={ref}
        onChange={(event) => setValue(event.currentTarget.value)}
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
  `,

  TextArea: styled.textarea<{ fontSize: string }>`
    width: 100%;

    border: none;
    outline: none;
    resize: none;
    font-size: ${({ fontSize }) => fontSize};
    letter-spacing: 0;
    overflow: hidden;
  `,
};
