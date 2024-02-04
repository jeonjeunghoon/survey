import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { selectSingleOption } from '../store/form/formSlice';

export const useViewformRadio = (id: number) => {
  const { optionList, selectedSingleOption, otherOption, hasOtherOption } = useSelector(
    (state: RootState) => state.form.questionList.find((question) => question.id === id)!,
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

  return {
    optionList,
    selectedSingleOption: selectedSingleOption ? selectedSingleOption.option : null,
    hasOtherOption,
    otherOption: otherOption ?? '',
    changeSelectedOption,
  };
};
