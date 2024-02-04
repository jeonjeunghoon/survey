import { useViewformCheckbox } from '../../hooks/useViewformCheckbox';

import CheckboxGroup from '../../components/common/CheckboxGroup';
import Checkbox from '../../components/common/Checkbox';
import OtherOption from '../OtherOption';

type Props = {
  id: number;
};

export default function ViewformCheckbox({ id }: Props) {
  const { optionList, selectedOptionList, otherOption, changeSelectedOptionList } =
    useViewformCheckbox(id);

  return (
    <CheckboxGroup valueList={selectedOptionList} handleCheckboxChange={changeSelectedOptionList}>
      {optionList.map((option) => {
        return (
          <Checkbox key={option} value={option}>
            {option}
          </Checkbox>
        );
      })}
      <Checkbox key='기타' value={otherOption}>
        <OtherOption id={id} />
      </Checkbox>
    </CheckboxGroup>
  );
}
