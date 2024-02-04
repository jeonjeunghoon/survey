import { useViewformRadio } from '../../hooks/useViewformRadio';
import OtherOption from '../OtherOption';

import Radio from '../common/Radio';

type Props = {
  id: number;
};

export default function ViewformRadio({ id }: Props) {
  const { optionList, selectedSingleOption, otherOption, changeSelectedOption } =
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
          >
            {option}
          </Radio>
        );
      })}
      <Radio
        key='기타'
        value={otherOption}
        selectedValue={selectedSingleOption}
        handleRadioChange={() =>
          changeSelectedOption({ option: otherOption, index: optionList.length })
        }
      >
        <OtherOption id={id} />
      </Radio>
    </>
  );
}
