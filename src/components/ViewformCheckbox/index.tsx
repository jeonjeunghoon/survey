import { useViewformCheckbox } from '../../hooks/useViewformCheckbox';

import CheckboxGroup from '../../components/common/CheckboxGroup';
import Checkbox from '../../components/common/Checkbox';

type Props = {
  id: number;
};

export default function ViewformCheckbox({ id }: Props) {
  const { optionList, selectedOptionList, changeSelectedOptionList } = useViewformCheckbox(id);

  return (
    <CheckboxGroup valueList={selectedOptionList} handleCheckboxChange={changeSelectedOptionList}>
      {optionList.map((option) => {
        return (
          <Checkbox key={option} value={option}>
            {option}
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
}
