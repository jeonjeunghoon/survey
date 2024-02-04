import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { selectMultipleOption } from '../store/form/formSlice';

export const useViewformCheckbox = (id: number) => {
  const { optionList, selectedMultipleOption, otherOption, hasOtherOption } = useSelector(
    (state: RootState) => state.form.questionList.find((question) => question.id === id)!,
  );
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
