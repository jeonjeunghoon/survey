import { ChangeEvent, ComponentPropsWithoutRef, useRef } from 'react';

import styled from '@emotion/styled';

import { useInput } from '../../../hooks/useInput';
import { useResizeTextareaHeight } from '../../../hooks/useResizeTextareaHeight';

import BottomBorder from '../BottomBorder';

type Props = {
  fontSize?: string;
  fontWeight?: number;
  initialValue?: string;
  rows?: number;
  backgroundColor?: string;
  margin?: string;
  isFocus?: boolean;
  placeholder?: string;
  handleTextareaChange?: (value?: string) => void;
} & ComponentPropsWithoutRef<'textarea'>;

export default function Textarea({
  fontSize = '1.6rem',
  fontWeight = 400,
  initialValue = '',
  rows = 1,
  backgroundColor = 'inherit',
  margin = '',
  isFocus = false,
  placeholder,
  handleTextareaChange,
  ...rest
}: Props) {
  const { value, setValue } = useInput(initialValue);
  const ref = useRef<HTMLTextAreaElement>(null);
  useResizeTextareaHeight(ref, value);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value;

    if (handleTextareaChange) handleTextareaChange(text);
    setValue(text);
  };

  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.Textarea
        fontSize={fontSize}
        fontWeight={fontWeight}
        rows={rows}
        placeholder={placeholder}
        margin={margin}
        value={value}
        ref={ref}
        onChange={handleChange}
        {...rest}
      />
      {isFocus && <BottomBorder startAnimation={isFocus} />}
    </S.Container>
  );
}

const S = {
  Container: styled.div<{
    backgroundColor: string;
  }>`
    display: flex;
    flex: 1;
    position: relative;

    background-color: ${({ backgroundColor }) => backgroundColor};
  `,

  Textarea: styled.textarea<{
    fontSize: string;
    fontWeight: number;
    margin: string;
  }>`
    width: 100%;
    margin: ${({ margin }) => margin};

    border: none;
    outline: none;
    resize: none;
    background-color: inherit;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: ${({ fontWeight }) => fontWeight};
    letter-spacing: 0;
    word-spacing: -6px;
    overflow: hidden;
  `,
};
