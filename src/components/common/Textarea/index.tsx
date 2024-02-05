import { ComponentPropsWithoutRef, useRef } from 'react';

import styled from '@emotion/styled';

import { useAdjustTextareaHeight } from '../../../hooks/useAdjustTextareaHeight';
import { useCheckFocusingDiv } from '../../../hooks/useCheckFocusingDiv';
import { useTextarea } from '../../../hooks/useTextarea';

import BottomBorderAnimation from '../BottomBorderAnimation';

type Props = {
  fontSize?: string;
  fontWeight?: number;
  initialValue?: string;
  rows?: number;
  backgroundColor?: string;
  margin?: string;
  initialFocus?: boolean;
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
  initialFocus = false,
  hasBorderBottom = true,
  borderColor = 'black',
  placeholder,
  handleTextareaChange,
  ...rest
}: Props) {
  const { value, setValue, handleBlur } = useTextarea(initialValue, handleTextareaChange);
  const { divRef, isFocus } = useCheckFocusingDiv(initialFocus);
  const ref = useRef<HTMLTextAreaElement>(null);
  useAdjustTextareaHeight(ref, value);

  return (
    <S.Container
      ref={divRef}
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
        onChange={(event) => setValue(event.target.value)}
        onBlur={handleBlur}
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
