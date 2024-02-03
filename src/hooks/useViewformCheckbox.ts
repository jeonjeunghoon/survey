import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { selectMultipleOption } from '../store/form/formSlice';

export const useViewformCheckbox = (id: number) => {
  const optionList = useSelector(
    (state: RootState) =>
      state.form.questionList!.find((question) => question.id === id)!.optionList,
  );
  const selectedMultipleOption = useSelector(
    (state: RootState) =>
      state.form.questionList!.find((question) => question.id === id)!.selectedMultipleOption,
  );
  const dispatch = useDispatch();

  const selectedOptionList = selectedMultipleOption?.map(({ option }) => option) ?? [];

  const changeSelectedOptionList = (optionList: string[]) => {
    dispatch(
      selectMultipleOption({
        id,
        selectedOptionList: optionList.map((option, index) => ({
          option,
          index,
        })),
      }),
    );
  };

  return { optionList, selectedOptionList, changeSelectedOptionList };
};
