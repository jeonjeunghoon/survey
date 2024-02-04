import { useViewformCheckbox } from '../../hooks/useViewformCheckbox';

import CheckboxGroup from '../../components/common/CheckboxGroup';
import Checkbox from '../../components/common/Checkbox';
import OtherOption from '../OtherOption';

type Props = {
  id: number;
  disabled?: boolean;
};

export default function ViewformCheckbox({ id, disabled = false }: Props) {
  const { optionList, selectedOptionList, otherOption, changeSelectedOptionList } =
    useViewformCheckbox(id);

  return (
    <CheckboxGroup valueList={selectedOptionList} handleCheckboxChange={changeSelectedOptionList}>
      {optionList.map((option) => {
        return (
          <Checkbox key={option} value={option} disabled={disabled}>
            {option}
          </Checkbox>
        );
      })}
      <Checkbox key='기타' value={otherOption} disabled={disabled}>
        <OtherOption id={id} />
      </Checkbox>
    </CheckboxGroup>
  );
}
