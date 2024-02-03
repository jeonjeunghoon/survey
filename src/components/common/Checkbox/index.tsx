import { ComponentProps, useContext } from 'react';

import styled from '@emotion/styled';

import { CheckboxContext } from '../CheckboxGroup/CheckboxContext';

type Props = {
  value: string;
};

export default function Checkbox({ value, children, ...rest }: Props & ComponentProps<'input'>) {
  const context = useContext(CheckboxContext);

  const { isChecked, toggleValue } = context!;

  return (
    <S.Label>
      <S.Input
        type='checkbox'
        checked={isChecked(value)}
        onChange={({ target: { checked } }) => toggleValue({ checked, value })}
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
    width: 16px;
    height: 16px;
  `,
};
