import { useDisabled } from '../../hooks/useDisabled';
import { useViewformRadio } from '../../hooks/useViewformRadio';

import Radio from '../common/Radio';
import OtherOption from '../OtherOption';

type Props = {
  id: number;
};

export default function ViewformRadio({ id }: Props) {
  const { optionList, selectedSingleOption, otherOption, hasOtherOption, changeSelectedOption } =
    useViewformRadio(id);
  const isDisabled = useDisabled();

  return (
    <>
      {optionList.map((option, index) => {
        return (
          <Radio
            key={`${index}-${option}`}
            value={option}
            selectedValue={selectedSingleOption}
            handleRadioChange={() => changeSelectedOption({ option, index })}
            disabled={isDisabled}
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
          disabled={isDisabled}
        >
          <OtherOption id={id} />
        </Radio>
      )}
    </>
  );
}
