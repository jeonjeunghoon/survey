import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuestionOptionListById,
  selectSelectedSingleOptionById,
} from '../store/form/selectors';
import { selectSingleOption } from '../store/form/formSlice';

import { DropdownMenu } from '../types/dropdown';

export const useViewformDropdownOption = (id: number) => {
  const optionList = useSelector(selectQuestionOptionListById(id));
  const selectedSingleOption = useSelector(selectSelectedSingleOptionById(id));
  const dispatch = useDispatch();

  const defaultOption = selectedSingleOption
    ? { text: selectedSingleOption.option }
    : { text: '선택' };

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
