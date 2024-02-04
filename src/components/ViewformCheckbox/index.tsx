import { useViewformCheckbox } from '../../hooks/useViewformCheckbox';
import { useDisabled } from '../../hooks/useDisabled';

import CheckboxGroup from '../../components/common/CheckboxGroup';
import Checkbox from '../../components/common/Checkbox';
import OtherOption from '../OtherOption';

type Props = {
  id: number;
};

export default function ViewformCheckbox({ id }: Props) {
  const { optionList, selectedOptionList, otherOption, hasOtherOption, changeSelectedOptionList } =
    useViewformCheckbox(id);
  const isDisabled = useDisabled();

  return (
    <CheckboxGroup valueList={selectedOptionList} handleCheckboxChange={changeSelectedOptionList}>
      {optionList.map((option) => {
        return (
          <Checkbox key={option} value={option} disabled={isDisabled}>
            {option}
          </Checkbox>
        );
      })}
      {hasOtherOption && (
        <Checkbox key='기타' value={otherOption} disabled={isDisabled}>
          <OtherOption id={id} />
        </Checkbox>
      )}
    </CheckboxGroup>
  );
}
