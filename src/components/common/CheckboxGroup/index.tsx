import { ComponentPropsWithRef } from 'react';

import styled from '@emotion/styled';

import { CheckboxContext } from './CheckboxContext';

type Props = {
  valueList: string[];
  handleCheckboxChange: (valueList: string[]) => void;
} & ComponentPropsWithRef<'input'>;

export default function CheckboxGroup({ valueList, children, handleCheckboxChange }: Props) {
  const isChecked = (value: string) => valueList.includes(value);

  const toggleValue = ({ checked, value }: { checked: boolean; value: string }) => {
    if (checked) {
      handleCheckboxChange([...valueList, value]);
    } else {
      handleCheckboxChange(valueList.filter((v) => v !== value));
    }
  };

  return (
    <S.Fieldset>
      <CheckboxContext.Provider value={{ isChecked, toggleValue }}>
        {children}
      </CheckboxContext.Provider>
    </S.Fieldset>
  );
}

const S = {
  Fieldset: styled.fieldset`
    border: none;
  `,
};
