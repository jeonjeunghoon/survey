import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { storeAnswer } from '../store/form/formSlice';

export const useViewformAnswer = (id: number) => {
  const questionList = useSelector((state: RootState) => state.form.questionList);
  const dispatch = useDispatch();
  const type = questionList[0].type;
  const initialAnswer = questionList!.find((question) => question.id === id)?.answer ?? '';
  const changeAnswer = (answer: string | null) => dispatch(storeAnswer({ id, answer }));

  return { type, initialAnswer, changeAnswer };
};
