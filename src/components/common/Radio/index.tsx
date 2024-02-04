import { ComponentProps } from 'react';

import styled from '@emotion/styled';

type Props = {
  value: string;
  selectedValue: string | null;
  handleRadioChange: () => void;
};

export default function Radio({
  value,
  selectedValue,
  handleRadioChange,
  children,
  ...rest
}: Props & ComponentProps<'input'>) {
  return (
    <S.Label>
      <S.Input
        type='radio'
        checked={value === selectedValue}
        onChange={handleRadioChange}
        {...rest}
      />
      {children}
    </S.Label>
  );
}

const S = {
  Label: styled.label`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 12px;
    padding: 8px 0;

    font-size: 1.6rem;
  `,

  Input: styled.input`
    width: 20px;
    height: 20px;
  `,
};
