import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectSingleOption } from '../../store/form/formSlice';

import Radio from '../common/Radio';

type Props = {
  id: number;
};

export default function ViewformRadio({ id }: Props) {
  const { optionList, selectedSingleOption } = useSelector(
    (state: RootState) => state.form.questionList!.find((question) => question.id === id)!,
  );

  const dispatch = useDispatch();

  const changeSelectedOption = (selectedOption: { option: string; index: number } | null) => {
    dispatch(
      selectSingleOption({
        id,
        selectedOption,
      }),
    );
  };

  return (
    <>
      {optionList.map((option, index) => {
        return (
          <Radio
            key={`${index}-${option}`}
            value={option}
            selectedValue={selectedSingleOption!.option}
            handleRadioChange={() => changeSelectedOption({ option, index })}
          >
            {option}
          </Radio>
        );
      })}
    </>
  );
}
