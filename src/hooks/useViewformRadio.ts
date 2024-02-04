import { useDispatch, useSelector } from 'react-redux';
import { selectSingleOption } from '../store/form/formSlice';
import {
  selectQuestionHasOtherOptionById,
  selectQuestionOptionListById,
  selectQuestionOtherOptionById,
  selectSelectedSingleOptionById,
} from '../store/form/selectors';

export const useViewformRadio = (id: number) => {
  const optionList = useSelector(selectQuestionOptionListById(id));
  const otherOption = useSelector(selectQuestionOtherOptionById(id));
  const hasOtherOption = useSelector(selectQuestionHasOtherOptionById(id));
  const selectedSingleOption = useSelector(selectSelectedSingleOptionById(id));
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
