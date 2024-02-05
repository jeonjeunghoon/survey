import { ChangeEvent, ComponentPropsWithoutRef, useRef } from 'react';

import styled from '@emotion/styled';

import { useInput } from '../../../hooks/useInput';
import { useAdjustTextareaHeight } from '../../../hooks/useAdjustTextareaHeight';

import BottomBorderAnimation from '../BottomBorderAnimation';

type Props = {
  fontSize?: string;
  fontWeight?: number;
  initialValue?: string;
  rows?: number;
  backgroundColor?: string;
  margin?: string;
  isFocus?: boolean;
  hasBorderBottom?: boolean;
  borderColor?: string;
  placeholder?: string;
  handleTextareaChange?: (value: string) => void;
} & ComponentPropsWithoutRef<'textarea'>;

export default function Textarea({
  fontSize = '1.6rem',
  fontWeight = 400,
  initialValue = '',
  rows = 1,
  backgroundColor = 'inherit',
  margin = '',
  isFocus = false,
  hasBorderBottom = true,
  borderColor = 'black',
  placeholder,
  handleTextareaChange,
  ...rest
}: Props) {
  const { value, setValue } = useInput(initialValue);
  const ref = useRef<HTMLTextAreaElement>(null);
  useAdjustTextareaHeight(ref, value);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value;

    if (handleTextareaChange) handleTextareaChange(text);
    setValue(text);
  };

  return (
    <S.Container
      hasBorderBottom={hasBorderBottom}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
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
      {isFocus && <BottomBorderAnimation startAnimation={isFocus} />}
    </S.Container>
  );
}

const S = {
  Container: styled.div<{ hasBorderBottom: boolean; borderColor: string; backgroundColor: string }>`
    display: flex;
    flex: 1;
    position: relative;

    border-bottom: ${({ hasBorderBottom }) => (hasBorderBottom ? '1px solid black' : '')};
    border-color: ${({ borderColor }) => borderColor};
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
    word-spacing: -4px;
    overflow: hidden;
  `,
};
