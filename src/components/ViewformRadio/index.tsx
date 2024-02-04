import { useViewformRadio } from '../../hooks/useViewformRadio';

import Radio from '../common/Radio';

type Props = {
  id: number;
};

export default function ViewformRadio({ id }: Props) {
  const { optionList, selectedSingleOption, changeSelectedOption } = useViewformRadio(id);

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
    </>
  );
}
