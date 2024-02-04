import { useDispatch, useSelector } from 'react-redux';
import { setOtherOption } from '../store/form/formSlice';
import { RootState } from '../store';

export const useOtherOption = (id: number) => {
  const { hasOtherOption, otherOption } = useSelector(
    (state: RootState) => state.form.questionList!.find((question) => question.id === id)!,
  );

  const dispatch = useDispatch();

  const changeOtherOption = (option: string) => dispatch(setOtherOption({ id, option }));

  return { hasOtherOption, otherOption: otherOption ?? '', changeOtherOption };
};
