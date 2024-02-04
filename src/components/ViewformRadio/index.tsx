import { useViewformRadio } from '../../hooks/useViewformRadio';
import OtherOption from '../OtherOption';

import Radio from '../common/Radio';

type Props = {
  id: number;
  disabled?: boolean;
};

export default function ViewformRadio({ id, disabled = false }: Props) {
  const { optionList, selectedSingleOption, otherOption, hasOtherOption, changeSelectedOption } =
    useViewformRadio(id);

  return (
    <>
      {optionList.map((option, index) => {
        return (
          <Radio
            key={`${index}-${option}`}
            value={option}
            selectedValue={selectedSingleOption}
            handleRadioChange={() => changeSelectedOption({ option, index })}
            disabled={disabled}
          >
            {option}
          </Radio>
        );
      })}
      {hasOtherOption && (
        <Radio
          key='기타'
          value={otherOption}
          selectedValue={selectedSingleOption}
          handleRadioChange={() =>
            changeSelectedOption({ option: otherOption, index: optionList.length })
          }
          disabled={disabled}
        >
          <OtherOption id={id} />
        </Radio>
      )}
    </>
  );
}
