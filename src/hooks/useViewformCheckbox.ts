import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuestionHasOtherOptionById,
  selectQuestionOptionListById,
  selectQuestionOtherOptionById,
  selectSelectedMultipleOptionById,
} from '../store/form/selectors';
import { selectMultipleOption } from '../store/form/formSlice';

export const useViewformCheckbox = (id: number) => {
  const optionList = useSelector(selectQuestionOptionListById(id));
  const otherOption = useSelector(selectQuestionOtherOptionById(id));
  const hasOtherOption = useSelector(selectQuestionHasOtherOptionById(id));
  const selectedMultipleOption = useSelector(selectSelectedMultipleOptionById(id));
  const dispatch = useDispatch();

  const selectedOptionList = selectedMultipleOption?.map(({ option }) => option) ?? [];

  const changeSelectedOptionList = (selectedOptionList: string[]) => {
    dispatch(
      selectMultipleOption({
        id,
        selectedOptionList: selectedOptionList.map((option, index) => ({
          option,
          index,
        })),
      }),
    );
  };

  return {
    optionList,
    selectedOptionList,
    otherOption: otherOption ?? '',
    hasOtherOption,
    changeSelectedOptionList,
  };
};
