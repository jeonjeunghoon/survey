import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { selectSingleOption } from '../store/form/formSlice';

import { DropdownMenu } from '../types/dropdown';

export const useViewformDropdownOption = (id: number) => {
  const optionList = useSelector(
    (state: RootState) =>
      state.form.questionList!.find((question) => question.id === id)!.optionList,
  );
  const selectedOption = useSelector(
    (state: RootState) =>
      state.form.questionList!.find((question) => question.id === id)!.selectedSingleOption,
  );
  const dispatch = useDispatch();

  const defaultOption = selectedOption ? { text: selectedOption.option } : { text: '선택' };

  const dropdownOptionList: DropdownMenu[] = [
    {
      text: '선택',
      handleClick: () => dispatch(selectSingleOption({ id, selectedOption: null })),
    },

    ...optionList.map((option, index) => ({
      text: option,
      handleClick: () => dispatch(selectSingleOption({ id, selectedOption: { option, index } })),
    })),
  ];

  return { defaultOption, dropdownOptionList };
};
